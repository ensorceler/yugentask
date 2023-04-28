// This is the lambda for authentication
// signup and login both

import { Context, APIGatewayEvent } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { comparePassword, hashPassword } from "../../utils/password";
import lambdaResponse from "../../utils/lambdaResponse";
import { signJWTToken } from "../../utils/jwtAuth";

const dynamoDB = new DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: "ap-south-1",
});

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<any> => {
  console.log("event->", event);
  console.log("uuid ->", uuidv4());
  console.log("dynamodb table name ->", process.env.DYNAMODB_TABLE_NAME);

  const requestBody = JSON.parse(event.body!);

  if (event.resource === "/auth/login") {
    const response = await loginUser(requestBody);
    return response;
  } else if (event.resource === "/auth/signup") {
    const response = await signupUser(requestBody);
    return response;
  } else
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Not Found",
      }),
    };
};

const signupUser = async (requestBody: any) => {
  const userId = uuidv4();
  const userEmail = requestBody.email;
  const password: string = requestBody.password;
  const hashedPassword = hashPassword(password);
  const tableName = process.env.DYNAMODB_TABLE_NAME!;

  const dbResponse = await dynamoDB
    .query({
      TableName: tableName,
      KeyConditionExpression: "PK=:pk",
      ExpressionAttributeValues: {
        ":pk": `userEmail#${userEmail}`,
      },
    })
    .promise();
  if (dbResponse.Count) {
    return {
      statusCode: 409,
      body: JSON.stringify({
        message: "User with Email already exists",
      }),
    };
  }

  try {
    const dbResponse = await dynamoDB
      .batchWrite({
        RequestItems: {
          [tableName]: [
            {
              PutRequest: {
                Item: {
                  PK: `user#${userId}`,
                  SK: `user#${userId}`,
                  entityType: "User",
                  fullName: requestBody.fullName,
                  email: requestBody.email,
                  password: hashedPassword,
                  image_url: "",
                  created_at: new Date().toISOString(),
                },
              },
            },
            {
              PutRequest: {
                Item: {
                  PK: `userEmail#${userEmail}`,
                  SK: `#unique#`,
                  userId: userId,
                },
              },
            },
          ],
        },
      })
      .promise();
    console.log("response from dynamodb ->", dbResponse);
    return {
      statusCode: 201,
      body: JSON.stringify({
        type: "Signup successful!!!",
      }),
    };
  } catch (err) {
    console.log("error ->", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error Signup",
      }),
    };
  }
};

const loginUser = async (requestBody: any) => {
  const email = requestBody.email;
  const password = requestBody.password;
  const tableName = process.env.DYNAMODB_TABLE_NAME!;

  try {
    // find the user with the email
    const userEmailInfo = await dynamoDB
      .query({
        TableName: tableName,
        KeyConditionExpression: "PK =:pk ",
        ExpressionAttributeValues: {
          ":pk": `userEmail#${email}`,
        },
      })
      .promise();
    // if the user with Email exits
    if (userEmailInfo.Count) {
      const userId = userEmailInfo?.Items?.[0].userId;

      // get the userinfo by Id
      const userInfo = await dynamoDB
        .query({
          TableName: tableName,
          KeyConditionExpression: "PK=:pk and SK=:sk",
          ExpressionAttributeValues: {
            ":pk": `user#${userId}`,
            ":sk": `user#${userId}`,
          },
        })
        .promise();

      console.log("userInfo ->", userInfo);
      const hashedPassword = userInfo.Items?.[0].password;

      console.log("hashedPasword ->", hashedPassword);
      console.log(
        "comparedPassword ->",
        comparePassword(password, hashedPassword)
      );
      if (comparePassword(password, hashedPassword) === true) {
        const token = signJWTToken({ id: userId });
        return lambdaResponse(200, {
          message: "Logged in successfully",
          token: `${token}`,
        });
      } else {
        return lambdaResponse(400, {
          message: "Passwords do not match",
          password: password,
        });
      }
    }
    // user with Email doesn't exist
    else {
      throw new Error("Email Doesn't exist");
    }
  } catch (err: unknown) {
    console.log("err ->", err);
    return lambdaResponse(500, { message: "internal server error", err: err });
  }
};

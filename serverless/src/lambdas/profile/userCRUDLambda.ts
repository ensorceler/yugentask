import { DynamoDB } from "aws-sdk";
import lambdaResponse from "../../utils/lambdaResponse";

const dynamoDB = new DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: "ap-south-1",
});
const tableName = process.env.DYNAMODB_TABLE_NAME!;

export const handler = async (event: any, context: any) => {
  const userId: string = event.requestContext.authorizer?.principalId;
  try {
    const response = await dynamoDB
      .query({
        TableName: tableName,
        KeyConditionExpression: "PK=:pk and SK=:sk",
        ExpressionAttributeValues: {
          ":pk": `user#${userId}`,
          ":sk": `user#${userId}`,
        },
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Profile Information",
        info: response.Items,
      }),
    };
  } catch (err) {
    return lambdaResponse(500, { message: "Error" });
  }
};

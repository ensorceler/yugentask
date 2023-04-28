// This is the lambda to handler calendar events CRUD functionality
// get calendar events, add new calendar event, put and delete

import { Context, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import lambdaResponse from "../../utils/lambdaResponse";
import { DynamoDB } from "aws-sdk";
import * as uuid from "uuid";
import { request } from "http";

const dynamoDB = new DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: "ap-south-1",
});

const tableName = process.env.DYNAMODB_TABLE_NAME!;

interface CalendarEventType {
  id?: string;
  title: string;
  description: string;
  date: string;
  start_time: string;
  end_time: string;
}

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const userId: string = event.requestContext.authorizer?.principalId;
  const requestBody: CalendarEventType = JSON.parse(event?.body!);
  console.log("user calendar handler ->", event);

  if (
    event.resource === "/user/calendar/getCalendarEvents" &&
    event.httpMethod === "GET"
  ) {
    const response = await getCalendarEvents(
      userId,
      requestBody,
      event.queryStringParameters
    );
    return response;
  } else if (
    event.resource === "/user/calendar/addCalendarEvent" &&
    event.httpMethod === "POST"
  ) {
    console.log("add calendar event->", event);
    const response = await addNewCalendarEvent(userId, requestBody);
    return response;
  } else if (
    event.resource === "/user/calendar/updateCalendarEvent" &&
    event.httpMethod === "PUT"
  ) {
    const response = await updateCalendarEventById(userId, requestBody);
    return response;
  } else if (
    event.resource === "/user/calendar/deleteCalendarEvent" &&
    event.httpMethod === "DELETE"
  ) {
    const eventId = (event?.body as any)?.id;
    const response = await deleteCalendarEventById(userId, eventId);
    return response;
  }
  return {
    statusCode: 404,
    body: JSON.stringify({
      message: "No resource matching",
      event: event,
    }),
  };
};

const getCalendarEvents = async (
  userId: string,
  requestBody: CalendarEventType,
  queryParams: any
) => {
  try {
    let sk = `cal#`;
    if (queryParams?.date) {
      sk = `cal#${queryParams.date}#`;
    }
    const response = await dynamoDB
      .query({
        TableName: tableName,
        KeyConditionExpression: "PK=:pk and begins_with(SK,:sk)",
        ExpressionAttributeValues: {
          ":pk": `user#${userId}`,
          ":sk": sk,
        },
      })
      .promise();
    return lambdaResponse(200, response);
  } catch (err) {
    return lambdaResponse(500, {
      message: "Internal Server Error",
      error: err,
    });
  }
};
const addNewCalendarEvent = async (
  userId: string,
  requestBody: CalendarEventType
) => {
  const calendarEventId = uuid.v4();
  const { title, description, date, start_time, end_time } = requestBody;

  try {
    const _ = await dynamoDB
      .put({
        TableName: tableName,
        Item: {
          PK: `user#${userId}`,
          SK: `cal#${date}#${calendarEventId}`,
          entityType: "CalendarEvent",
          id: calendarEventId,
          title,
          description,
          date,
          start_time,
          end_time,
        },
      })
      .promise();
    return lambdaResponse(201, { message: "Event Added to DB" });
  } catch (err) {
    return lambdaResponse(500, { message: "dynamoDB error", error: err });
  }
};

const updateCalendarEventById = async (
  userId: string,
  requestBody: CalendarEventType
) => {
  try {
    return lambdaResponse(200, { message: "business logic not setup" });
  } catch (err) {
    return lambdaResponse(500, { message: "" });
  }
};

const deleteCalendarEventById = async (userId: string, eventId: string) => {
  try {
    const _ = await dynamoDB
      .delete({
        TableName: tableName,
        Key: {
          PK: `user#${userId}`,
          SK: `cal#`,
        },
        ConditionExpression: "attribute_exists(id) and id = :idValue",
        ExpressionAttributeValues: {
          ":idValue": eventId,
        },
      })
      .promise();
    return lambdaResponse(200, { message: "Successfully Deleted Event" });
  } catch (err) {
    return lambdaResponse(500, {
      message: "Internal Server Error",
      error: err,
    });
  }
};

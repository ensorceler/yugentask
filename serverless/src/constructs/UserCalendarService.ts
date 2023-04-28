import { Construct } from "constructs";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

interface UserCalendarServiceProps {
  restApi: apigw.RestApi;
  dbTable: dynamodb.Table;
  userAuthorizer: apigw.TokenAuthorizer;
}

export class UserCalendarService extends Construct {
  constructor(scope: Construct, id: string, props: UserCalendarServiceProps) {
    super(scope, id);
    // lambda declaration

    const calendarEventsCRUDLambda = new NodejsFunction(
      this,
      "calendar-events-lambda-CRUD",
      {
        entry: "dist/lambdas/calendar/calendarEventsLambda.js",
        bundling: {
          nodeModules: [],
        },
        environment: {
          DYNAMODB_TABLE_NAME: props.dbTable.tableName,
        },
      }
    );

    const userInfoCrudLambda = new NodejsFunction(
      this,
      "user-info-crud-lambda",
      {
        entry: "dist/lambdas/profile/userCRUDLambda.js",
        bundling: {
          nodeModules: [],
        },
        environment: {
          DYNAMODB_TABLE_NAME: props.dbTable.tableName,
        },
      }
    );

    // database permissions for every lambda
    props.dbTable.grantReadWriteData(calendarEventsCRUDLambda);
    props.dbTable.grantReadWriteData(userInfoCrudLambda);

    // user endpoint resouce
    const userCalendarRoute = props.restApi.root
      .addResource("user")
      .addResource("calendar");

    // handle user resource

    // handle the calendar Events
    userCalendarRoute
      .addResource("getCalendarEvents")
      .addMethod("GET", new apigw.LambdaIntegration(calendarEventsCRUDLambda), {
        authorizer: props.userAuthorizer,
      });

    userCalendarRoute
      .addResource("addCalendarEvent")
      .addMethod(
        "POST",
        new apigw.LambdaIntegration(calendarEventsCRUDLambda),
        {
          authorizer: props.userAuthorizer,
        }
      );
    userCalendarRoute
      .addResource("updateCalendarEvent")
      .addMethod("PUT", new apigw.LambdaIntegration(calendarEventsCRUDLambda), {
        authorizer: props.userAuthorizer,
      });
    userCalendarRoute
      .addResource("deleteCalendarEvent")
      .addMethod(
        "DELETE",
        new apigw.LambdaIntegration(calendarEventsCRUDLambda),
        {
          authorizer: props.userAuthorizer,
        }
      );
  }
}

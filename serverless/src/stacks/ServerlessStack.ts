import { App, Stack, StackProps } from "aws-cdk-lib";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as s3 from "aws-cdk-lib/aws-s3";

import { AuthService } from "../constructs/AuthService";
import { UserApiService } from "../constructs/UserApiService";
import { UserCalendarService } from "../constructs/UserCalendarService";

export class ServerlessStack extends Stack {
  constructor(scope: App, id: string, props: StackProps) {
    super(scope, id, props);

    const dynamoDBTable = new dynamodb.Table(this, "YugenTask-DynamoDB", {
      tableName: "YugenTask",
      partitionKey: { name: "PK", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "SK", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    const s3Bucket = new s3.Bucket(this, "image-bucket", {
      publicReadAccess: true,
    });

    const restApi = new apigw.RestApi(this, "YugenTask-Api", {
      restApiName: "yugentask",
    });

    const authService = new AuthService(this, "Auth-Api", {
      restApi: restApi,
      dbTable: dynamoDBTable,
    });

    const userAuthorizer = authService.userAuthorizer;

    const userCalendarService = new UserCalendarService(
      this,
      "Calendar-API-Service",
      {
        restApi: restApi,
        dbTable: dynamoDBTable,
        userAuthorizer: userAuthorizer,
      }
    );
  }
}

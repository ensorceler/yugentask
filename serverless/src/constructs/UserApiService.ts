import { Construct } from "constructs";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

interface UserApiServiceProps {
  restApi: apigw.RestApi;
  dbTable: dynamodb.Table;
  userAuthorizer: apigw.TokenAuthorizer;
}

export class UserApiService extends Construct {
  constructor(scope: Construct, id: string, props: UserApiServiceProps) {
    super(scope, id);
    // lambda declaration

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
    props.dbTable.grantReadWriteData(userInfoCrudLambda);

    // user endpoint resouce
    const userRoute = props.restApi.root.addResource("user");

    // handle user resource
    userRoute
      .addResource("profile")
      .addMethod("GET", new apigw.LambdaIntegration(userInfoCrudLambda), {
        authorizer: props.userAuthorizer,
      });
  }
}

import { Construct } from "constructs";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

interface AuthServiceProps {
  restApi: apigw.RestApi;
  dbTable: dynamodb.Table;
}

export class AuthService extends Construct {
  public userAuthorizer: apigw.TokenAuthorizer;

  constructor(scope: Construct, id: string, props: AuthServiceProps) {
    super(scope, id);

    const authZLambda = new NodejsFunction(this, "authZLambda", {
      entry: "./dist/lambdas/auth/authZ.js",
      handler: "handler",
      bundling: {
        nodeModules: ["uuid", "bcrypt"],
      },
    });

    this.userAuthorizer = new apigw.TokenAuthorizer(this, "userAuthorizer", {
      handler: authZLambda,
      identitySource: apigw.IdentitySource.header("Authorization"),
      authorizerName: "UserAuthorization",
    });

    const authNLambda = new NodejsFunction(this, "authNLambda", {
      entry: "./dist/lambdas/auth/authN.js",
      handler: "handler",
      environment: {
        DYNAMODB_TABLE_NAME: props.dbTable.tableName,
      },
      bundling: {
        nodeModules: ["uuid", "bcrypt"],
      },
    });

    props.dbTable.grantFullAccess(authNLambda);

    const authRoute = props.restApi.root.addResource("auth");
    authRoute
      .addResource("signup")
      .addMethod("POST", new apigw.LambdaIntegration(authNLambda));
    authRoute
      .addResource("login")
      .addMethod("POST", new apigw.LambdaIntegration(authNLambda));
  }
}

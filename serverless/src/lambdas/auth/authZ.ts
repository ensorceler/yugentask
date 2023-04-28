import {
  Context,
  APIGatewayTokenAuthorizerEvent,
  APIGatewayAuthorizerResult,
} from "aws-lambda";
import { verifyJWTToken } from "../../utils/jwtAuth";

export const handler = async (
  event: APIGatewayTokenAuthorizerEvent,
  context: Context
) => {
  console.log("authZ working:");
  console.log("event:", event);

  const token = event.authorizationToken;
  const methodArn = event.methodArn;

  console.log("authToken ->", token);

  let principalId = "#nothing#";
  let effect = "Deny";

  const [verified, decoded_token] = verifyJWTToken(token);

  console.log("verified ->", verified);
  console.log("decoded_token", decoded_token);

  if (verified) {
    effect = "Allow";
    principalId = decoded_token.id;
  }

  const policyDocument = {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Effect: effect,
        /**
         * https://stackoverflow.com/questions/50331588/aws-api-gateway-custom-authorizer-strange-showing-error
         * Either Resource:* or TTL to 0 (haven't figured out yet)
         */
        Resource: "*",
      },
    ],
  };
  const policy: APIGatewayAuthorizerResult = {
    principalId: principalId,
    policyDocument: policyDocument,
  };

  return policy;
};

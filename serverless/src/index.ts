import { App } from "aws-cdk-lib";
import { ServerlessStack } from "./stacks/ServerlessStack";

const app = new App();

new ServerlessStack(app, "ServerlessStack", {});

import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-2_TJOlE1Kj0",
  ClientId: "529uncff24r3ssaoov35tedvov",
};

const cognitoUser = new CognitoUserPool(poolData);

export default cognitoUser;
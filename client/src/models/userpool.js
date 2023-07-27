import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolID = process.env.REACT_APP_UserPoolId;
const cid = process.env.REACT_APP_ClientId;

const poolData = {
  UserPoolId: poolID,
  ClientId: cid,
};

const cognitoUser = new CognitoUserPool(poolData);

export default cognitoUser;
// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'zmcepq5inl'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-hymcixcj.us.auth0.com',          // Auth0 domain
  clientId: 'sVgfuQ3gebRS8orX3MRopJmqkIr4T75a',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}

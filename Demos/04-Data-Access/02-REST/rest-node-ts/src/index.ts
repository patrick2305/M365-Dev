import { SPRestClient } from "./SPRestClient";

(<any>window).runSample = runSample;

export async function runSample() {
  const client = await authClient();

  const title = await client.query("/web/title");
  console.log("Title of the web", title);

  const lists = await client.query("/web/lists");
  console.log("Lists of the web", lists);
}

(<any>window).authClient = authClient;

export async function authClient() {
  const spTenant = "integrationsonline";

  const config = {
    auth: {
      clientId: "c1451a6a-8295-4569-9516-31bab5f4b4fe",
      authority: "https://login.microsoftonline.com/5c5f2a84-d003-4cf6-8144-bd0500e247ae/",
      redirectUri: "http://localhost:8080",
    },
  };

  const client = new SPRestClient(spTenant, config);
  (<any>window).spRest = client;
  client.logInfo();
  await client.logIn();
  return client;
}

async function doAuth() {
  //Sharepoint Tenant
  const spTenant = "integrationsonline";

  const config = {
    auth: {
      clientId: "a7e5a33f-4bb7-45b2-b00b-7de0eb23a961",
      authority:
        "https://login.microsoftonline.com/5c5f2a84-d003-4cf6-8144-bd0500e247ae/",
      redirectUri: "http://localhost:8080",
    },
  };

  //Creadte MSAL App with Scope to read User Profile
  const client = new Msal.UserAgentApplication(config);
  const scopes = {
    scopes: ["user.read"],
  };

  //Login -> Get ID Token
  const loginResponse = await client
    .loginPopup(scopes)
    .then((loginResponse) => {
      console.log("id_token acquired at: " + new Date().toString());
      console.log("LoginResponse", loginResponse);

      if (client.getAccount()) {
        console.log("Account", client.getAccount());
      }
    })
    .catch((error) => {
      console.log(error);
    });

  //Get AccessToken
  const tokenResponse = await client.acquireTokenSilent(scopes);

  console.log("Token Response", tokenResponse);

  //Read Profile
  //Notice beta endpoint with extended profile info
  const qryProfile = "https://graph.microsoft.com/beta/me";
  const profileResp = await fetch(qryProfile, {
    headers: {
      Authorization: "Bearer " + tokenResponse.accessToken,
    },
  });
  const profile = await profileResp.json();
  console.log("Profile", profile);

  //Call Sharepoint using Graph -> SharePoint REST API v2
  const spScope = {
    scopes: ["Sites.ReadWrite.All"],
  };
  const spGraphResp = await client.acquireTokenSilent(spScope);
  console.log("Token Response", spGraphResp);

  const qrySPLists = `https://graph.microsoft.com/v1.0/sites/${spTenant}.sharepoint.com/lists`;
  const listResp = await fetch(qrySPLists, {
    headers: {
      Authorization: "Bearer " + spGraphResp.accessToken,
    },
  });
  const lists = await listResp.json();
  console.log("Lists", lists.value);

  //Use SharePoint Rest v1 Scope
  const spScopeV1 = {
    scopes: [`https://${spTenant}.sharepoint.com/.default`],
  };

  const spRESTResp = await client.acquireTokenSilent(spScopeV1);
  const qrySPListsV1 = `https://${spTenant}.sharepoint.com/_api/web/title`;
  const titleResp = await fetch(qrySPListsV1, {
    headers: {
      Authorization: "Bearer " + spRESTResp.accessToken,
      accept: "application/json;odata=verbose",
    },
  });
  const title = await titleResp.json();
  console.log("Title", title);
}

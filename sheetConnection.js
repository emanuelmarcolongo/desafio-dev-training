import { google } from "googleapis";

export const authSheet = async () => {
  const spreadsheetId = "1eLKLi7GafHUjGOztqxHOqGxRoq3Gx2v9hPI88_vV1uc";

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = async () => await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  };
};

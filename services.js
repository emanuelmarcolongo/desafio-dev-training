import { authSheet } from "./sheetConnection.js";

const getSheetData = async () => {
  const { googleSheets, auth, spreadsheetId } = await authSheet();

  const rows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "engenharia_de_software",
  });

  const [title, classInfo, parameters, ...studentsInfo] = rows.data.values;

  return { title, classInfo, parameters, studentsInfo };
};

const updateSheetData = async (aditionalData) => {
  const { googleSheets, auth, spreadsheetId } = await authSheet();

  const updateValues = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "engenharia_de_software!G4:H27",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: aditionalData,
    },
  });
};

export const sheetService = {
  getSheetData,
  updateSheetData,
};

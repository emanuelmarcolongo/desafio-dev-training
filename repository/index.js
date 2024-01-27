import { connectionSheet } from "../database/index.js";

const getSheetData = async () => {
  const { googleSheets, auth, spreadsheetId } = await connectionSheet();

  const rows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "engenharia_de_software",
  });

  const [title, classInfo, parameters, ...studentsInfo] = rows.data.values;

  return { title, classInfo, parameters, studentsInfo };
};

const updateSheetData = async (aditionalData) => {
  const { googleSheets, auth, spreadsheetId } = await connectionSheet();

  const clearValues = await googleSheets.spreadsheets.values.clear({
    auth,
    spreadsheetId,
    range: "engenharia_de_software!G4:H27",
  });

  const appendValues = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "engenharia_de_software!G4:H27",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: aditionalData,
    },
  });
};

export const sheetRepository = {
  getSheetData,
  updateSheetData,
};

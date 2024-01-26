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

export const sheetService = {
  getSheetData,
};

getSheetData;

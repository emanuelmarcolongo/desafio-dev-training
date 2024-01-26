import { sheetService } from "./services.js";
import { utils } from "./utils.js";

const processClassData = async () => {
  const classSheetData = await sheetService.getSheetData();
  const { title, classInfo, parameters, studentsInfo } = classSheetData;

  const studentsResults = await utils.calculateStudentGrade(studentsInfo);

  const updateSheetWithResults = await sheetService.updateSheetData(
    studentsResults
  );
};

processClassData();

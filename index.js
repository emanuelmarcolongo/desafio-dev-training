import { libs } from "./libs/index.js";
import { sheetRepository } from "./repository/index.js";

const processClassData = async () => {
  const classSheetData = await sheetRepository.getSheetData();
  const { title, classInfo, parameters, studentsInfo } = classSheetData;

  const studentsResults = await libs.calculateStudentGrade(studentsInfo);

  const updateSheetWithResults = await sheetRepository.updateSheetData(
    studentsResults
  );
};

processClassData();

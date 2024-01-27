import { sheetRepository } from "./repository/index.js";

import { utils } from "./utils.js";

const processClassData = async () => {
  const classSheetData = await sheetRepository.getSheetData();
  const { title, classInfo, parameters, studentsInfo } = classSheetData;

  const studentsResults = await utils.calculateStudentGrade(studentsInfo);

  const updateSheetWithResults = await sheetRepository.updateSheetData(
    studentsResults
  );
};

processClassData();

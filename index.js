import { sheetService } from "./services.js";
import { handleStudentInfo } from "./utils.js";

const processClassData = async () => {
  const classSheetData = await sheetService.getSheetData();
  const { title, classInfo, parameters, studentsInfo } = classSheetData;

  const updateStudentInfo = await handleStudentInfo(studentsInfo);
  const updateSheetData = {
    title,
    classInfo,
    parameters,
    updateStudentInfo,
  };
};

processClassData();

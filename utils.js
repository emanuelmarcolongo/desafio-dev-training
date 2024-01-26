import { sheetService } from "./services.js";

const handleStudentInfo = async () => {
  const { studentsInfo } = await sheetService.getSheetData();

  const updatedStudentInfo = calculateStudentGrade(studentsInfo);

  return updatedStudentInfo;
};

const calculateStudentGrade = (studentsInfo) => {
  const totalClasses = 60;
  const updatedStudentInfo = studentsInfo.forEach((student) => {
    const [id, name, abscences, grade1, grade2, grade3] = student;

    let finalAproval = 0;
    let situation = "";

    const abscenceValue = abscences / totalClasses;
    if (abscenceValue >= 0.25) situation = "Reprovado por falta";
    const studentAverage = Math.ceil(
      (parseInt(grade1) + parseInt(grade2) + parseInt(grade3)) / 3
    );
    if (studentAverage >= 50 && studentAverage < 70) {
      finalAproval = (100 - studentAverage) / 2;
      if (situation === "") situation = "Exame Final";
    }

    if (studentAverage >= 70 && situation === "") situation = "Aprovado";

    student.push(situation);
    student.push(finalAproval);
  });

  return studentsInfo;
};

export { handleStudentInfo };

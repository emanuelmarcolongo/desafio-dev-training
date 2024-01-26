const calculateStudentGrade = (studentsInfo) => {
  const totalClasses = 60;
  const aditionalData = [];
  const updatedStudentInfo = studentsInfo.forEach((student) => {
    const [id, name, abscences, grade1, grade2, grade3] = student;

    let finalAproval = 0;
    let situation = "";

    const abscenceValue = abscences / totalClasses;
    if (abscenceValue >= 0.25) situation = "Reprovado por falta";
    const studentAverage = Math.ceil(
      (parseInt(grade1) + parseInt(grade2) + parseInt(grade3)) / 3
    );
    if (studentAverage >= 50 && studentAverage < 70 && situation === "") {
      finalAproval = 100 - studentAverage;
      if (situation === "") situation = "Exame Final";
    }

    if (studentAverage < 50 && situation === "") situation = "Reprovado";

    if (studentAverage >= 70 && situation === "") situation = "Aprovado";

    aditionalData.push([situation, finalAproval]);
  });

  return aditionalData;
};

export const utils = { calculateStudentGrade };

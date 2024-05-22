const questionsData = [
  {
    Questions: [
      {
        Description:
          "SET IN ORDER: Trash and recyclables are clearly labeled and in designated areas",
        QuestionID: "01b0a4bb-3d68-400a-912e-5a64f8f8f5ea",
        QuestionText:
          "SET IN ORDER: Trash and recyclables are clearly labeled and in designated areas",
        QuestionType: "Rejected Items",
        answer: "",
      },
      // {
      //   Description: "SET IN ORDER: CIL and CLM clipboards are neat and in designated areas",
      //   QuestionID: "03cd2421-1efe-47bd-8474-d3f11f7f0d8d",
      //   QuestionText: "SET IN ORDER: CIL and CLM clipboards are neat and in designated areas",
      //   QuestionType: "Maintenance Status",
      //   answer: "",
      // },
      // {
      //   Description: "SHINE: Sink areas are clean with clean paper towels",
      //   QuestionID: "0ddd5814-4644-4bf2-8c68-81887f2a668c",
      //   QuestionText: "SHINE: Sink areas are clean with clean paper towels",
      //   QuestionType: "Board Tools",
      //   answer: "",
      // },
      // {
      //   Description: "SET IN ORDER: All rejected product is disposed of or put back on the line.",
      //   QuestionID: "2c8228e2-2568-4b4f-a0cc-a23f6b846163",
      //   QuestionText: "SET IN ORDER: All rejected product is disposed of or put back on the line.",
      //   QuestionType: "Material Status",
      //   answer: "",
      // },
      // {
      //   Description: "SET IN ORDER: Sanitation boards are complete - brooms, dustpans and squeegees in good condition",
      //   QuestionID: "4370a55c-4854-42be-919e-734fee94e1a6",
      //   QuestionText: "SET IN ORDER: Sanitation boards are complete - brooms, dustpans and squeegees in good condition",
      //   QuestionType: "Board Equipment",
      //   answer: "",
      // },
      // {
      //   Description: "STANDARDIZE: Employee walking areas are unobstructed",
      //   QuestionID: "5c4ddfa7-c4bf-4432-96b2-eae710602183",
      //   QuestionText: "STANDARDIZE: Employee walking areas are unobstructed",
      //   QuestionType: "Board Tools",
      //   answer: "",
      // },
    ],
    form: "5s",
    plant: "garland",
    shift: "Shift2",
    line: "line4",
    equipment: "L4",
    oprator: "Jon Doe",
    status: "pending",
    id: "987654321",
  },
  {
    Questions: [
      {
        Description:
          "SET IN ORDER: Trash and recyclables are clearly labeled and in designated areas",
        QuestionID: "01b0a4bb-3d68-400a-912e-5a64f8f8f5ea",
        QuestionText:
          "SET IN ORDER: Trash and recyclables are clearly labeled and in designated areas",
        QuestionType: "Rejected Items",
        answer: "",
      },
      {
        Description:
          "SET IN ORDER: CIL and CLM clipboards are neat and in designated areas",
        QuestionID: "03cd2421-1efe-47bd-8474-d3f11f7f0d8d",
        QuestionText:
          "SET IN ORDER: CIL and CLM clipboards are neat and in designated areas",
        QuestionType: "Maintenance Status",
        answer: "",
      },
      {
        Description: "SHINE: Sink areas are clean with clean paper towels",
        QuestionID: "0ddd5814-4644-4bf2-8c68-81887f2a668c",
        QuestionText: "SHINE: Sink areas are clean with clean paper towels",
        QuestionType: "Board Tools",
        answer: "",
      },
      {
        Description:
          "SET IN ORDER: All rejected product is disposed of or put back on the line.",
        QuestionID: "2c8228e2-2568-4b4f-a0cc-a23f6b846163",
        QuestionText:
          "SET IN ORDER: All rejected product is disposed of or put back on the line.",
        QuestionType: "Material Status",
        answer: "",
      },
      {
        Description:
          "SET IN ORDER: Sanitation boards are complete - brooms, dustpans and squeegees in good condition",
        QuestionID: "4370a55c-4854-42be-919e-734fee94e1a6",
        QuestionText:
          "SET IN ORDER: Sanitation boards are complete - brooms, dustpans and squeegees in good condition",
        QuestionType: "Board Equipment",
        answer: "",
      },
      {
        Description: "STANDARDIZE: Employee walking areas are unobstructed",
        QuestionID: "5c4ddfa7-c4bf-4432-96b2-eae710602183",
        QuestionText: "STANDARDIZE: Employee walking areas are unobstructed",
        QuestionType: "Board Tools",
        answer: "",
      },
    ],
    form: "5s",
    plant: "garland",
    shift: "Shift1",
    line: "14",
    equipment: "Test14",
    oprator: "Jon",
    status: "pending",
    id: "123456789",
  },
];

export const pendingCon = async (req, res) => {
  const { data } = req.body;

  // Find the form by id
  const form = questionsData.find((item) => item.id === data.id);
  if (form) {
    // Find the question by questionId
    const question = form.Questions.find(
      (q) => q.QuestionID === data.questionId
    );
    if (question) {
      // Update the answer
      question.answer = data.ans;

      // Check if all questions have completed answers
      const allAnswered = form.Questions.every(
        (q) =>
          q.answer === "true" || q.answer === "false" || q.answer === "null"
      );

      if (allAnswered) {
        form.status = "completed";
      }
    }
  }

  res.status(200).json({ success: true, updatedForm: questionsData });
};

export const getPending = async (req, res) => {
  res.status(200).json({ success: true, data : questionsData });
};

import { saveQuestion } from "../../controllers/Question";

export const questionsRouter = (app) => {
  app.post("/saveQuestions",saveQuestion);
};
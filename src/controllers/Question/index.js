import Question from "../../model/Question";
import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";

export async function saveQuestion(request, response, next) {
  try {
    const { QuestionText, QuestionType, Description } = request.body;
    const data = {
      QuestionText,
      QuestionType,
      Description,
    };
    const question = await Question.create(data);
    return success(request, response, question);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal server error"
    );
  }
}

import QuestionMapping from "../../model/Question_Mapping";
import Frequency from "../../model/Frequency";
import { internalServerError, success } from "../../helpers";

export const getDmsForms = async (request, response, next) => {
//   const { formID } = request.params;

  try {
   

    return success(request, response, formID);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal Server error"
    );
  }
};

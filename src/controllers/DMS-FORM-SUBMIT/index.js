import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import DmsFormSubmit from "../../model/DMS-Form-Submit";

export async function createDmsFormSubmit(request, response) {
  try {
    const {
      plant,
      dms_form_id,
      form,
      shift,
      line,
      submittedBy,
      equipment,
      answers,
    } = request.body;
    const formData = {
      Dms_Form_id: dms_form_id,
      Form: form,
      Shift: shift,
      Line: line,
      submittedBy: submittedBy,
      Equipment: equipment,
      Answers: JSON.stringify(answers),
      Plant: plant,
    };
    const dmsFormSubmit = await DmsFormSubmit.create(formData);
    return success(request, response, dmsFormSubmit.Form);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal Server Error"
    );
  }
}
export async function getDmsFormSubmit(request, response) {
  const { formId } = request.params;
  const { plant, shift, lines, frequency, equipments } = request.query;
  console.log(request.query);
  console.log(request.params);
  try {
    const productionLines = await DmsFormSubmit.findAll({
      where: {
        plant,
        shift,
        line: lines,
        equipment: equipments,
      },
    });
    const transformedData = {
      plant,
      form: "5S", // Assuming form is always "5S" for this transformation
      shift,
      lines: productionLines.map((line) => ({
        name: line.line,
        equipments: [
          {
            name: line.equipment,
            questions: JSON.parse(line.Answers).map((answer) => ({
              id: answer.question_id,
              answer: answer.answer,
            })),
          },
        ],
      })),
    };
    return success(request, response, transformedData);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal Server Error"
    );
  }
}

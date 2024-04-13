import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import DmsFormSubmit from "../../model/DMS-Form-Submit";
import Questions from "../../model/Question";
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
  try {
    const productionLines = await DmsFormSubmit.findAll({
      where: {
        plant,
        shift,
        line: lines,
        equipment: equipments,
      },
    });
    const transformedData = productionLines.map((item) => ({
      Dms_Form_id: item.Dms_Form_id.trim(),
      Form: item.Form,
      Shift: item.Shift,
      Line: item.Line,
      Equipment: item.Equipment,
      Answers: JSON.parse(item.Answers),
      submittedBy: item.submittedBy,
      Plant: item.Plant
    }));
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


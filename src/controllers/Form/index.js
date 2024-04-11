import Form from "../../model/Form";
import {
  success,
  badRequest,
  internalServerError,
} from "../../helpers/api-response";

export async function createForm(request, response, next) {
  try {
     const {FormName,Description} =request.body;
     const data={
        FormName,
        Description,
     }
     const form=await Form.create(data);
    return success(request, response, form);
  } catch (error) {
    return internalServerError(request, response, error.message);
  }
}

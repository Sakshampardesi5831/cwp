import Form from "../../model/Form";
import {
  success,
  badRequest,
  internalServerError,
} from "../../helpers/api-response";
import FormEquipment from '../../model/Form_Equipment';
export async function createFormEquipment(request, response, next) {
  try {
     const {FormId,EquipmentId,LineId,ShiftId} =request.body;
     const data={
      FormId:FormId,
      EquipmentId:EquipmentId,
      LineId:LineId,
      ShiftId:ShiftId
     }
     const form=await FormEquipment.create(data);
    return success(request, response, form);
  } catch (error) {
    return internalServerError(request, response, error.message);
  }
}

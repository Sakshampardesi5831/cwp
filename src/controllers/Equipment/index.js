import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import Equipment from "../../model/Equipment";

export const saveEquipment = async (request, response) => {
  const { EquipmentName, Description, LineID } = request.body;
  try {
    const equipment = await Equipment.create({
      EquipmentName: EquipmentName,
      Description: Description,
      LineID: LineID,
      CreationDate: new Date().toUTCString(),
      UpdateDate: new Date().toUTCString(),
    });
    success(request, response, equipment);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal server error"
    );
  }
};

import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import Area from "../../model/Area";
export const saveArea = async (request, response, next) => {
  const { areaName, description, plantId } = request.body;

  try {
    const area = await Area.create({
      AreaName: areaName,
      Description: description,
      PlantID: plantId,
    });
    return success(request, response, area);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal server error"
    );
  }
};

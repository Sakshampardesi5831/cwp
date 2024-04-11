import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import Line from "../../model/Line";

export const saveLine = async (request, response, next) => {
  const { AreaID, Description, LineName } = request.body;
  try {
    const line = await Line.create({
      AreaID: AreaID,
      Description: Description,
      LineName: LineName,
      CreationDate: new Date().toUTCString(),
      UpdateDate: new Date().toUTCString(),
    });
    return success(request, response, line);
  } catch (error) {
    return internalServerError(request, response, error.message);
  }
};

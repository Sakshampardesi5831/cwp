import { badRequest, internalServerError, success } from "../../helpers";
import db from "../../config/db";
export const SaveUser = (request, response, next) => {
  try {
    return success(
      request,
      response,
      "User Saved Successfully",
      "User Saved Successfully"
    );
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal Server Error"
    );
  }
};

export const getProcessors = async (request, response, next) => {
  const { plantId } = request.query;
  try {
    const sql = `
    SELECT DISTINCT 
        A.AreaID, A.AreaName, A.Description AS AreaDescription,
        L.LineID, L.LineName, L.Description AS LineDescription,
        E.EquipmentID, E.EquipmentName, E.Description AS EquipmentDescription
    FROM  
        Plants P
    INNER JOIN 
        Areas A ON P.PlantID = A.PlantID
    INNER JOIN 
        \`Lines\` L ON L.AreaID = A.AreaID
    INNER JOIN 
        Equipment E ON E.LineID = L.LineID
    WHERE 
        P.PlantID = '${plantId}';
    `;
    console.log(sql);
    const processors = await db.query(sql, { type: db.QueryTypes.SELECT });
    return success(
      request,
      response,
      processors,
      "Processors Fetched Successfully"
    );
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal Server Error"
    );
  }
};

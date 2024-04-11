import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import db from "../../config/db";
export const getDailyManagerForms = async (request, response, next) => {
  const { areaId, lineId, plantId } = request.query;
  try {
    const sql = `
    SELECT DISTINCT 
        A.AreaID,
        A.AreaName,
        A.Description,
        L.LineID,
        L.LineName,
        L.Description,
        A.AreaID,
        E.EquipmentID,
        E.EquipmentName,
        E.Description
    FROM 
        Plants p 
    INNER JOIN 
        Areas A ON p.PlantID = A.PlantID 
    INNER JOIN 
        \`Lines\` L ON L.AreaID IN ('cfd776b2-9d0d-476e-9426-3d61f210d7b2') 
    INNER JOIN 
        Equipment E ON E.LineID IN ('46efc7b0-1ac5-4e96-8d02-b6fb7981ace6') 
    WHERE 
        p.PlantID ='74833a16-afd2-4d67-a7ab-e0541abdbec8';
`;
    const processors = await db.query(sql, { type: db.QueryTypes.SELECT });
    return success(request, response, processors);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal server error"
    );
  }
};

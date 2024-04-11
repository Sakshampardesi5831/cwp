import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import db from "../../config/db";
import Plant from "../../model/Plant";
export const getDailyManagerForms = async (request, response, next) => {
  const { plant, shift, areas, lines, equipments, date } = request.query;
  const project = await Plant.findOne({ where: { PlantName: plant } });
  console.log(project.PlantID);
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
        \`Lines\` L ON L.AreaID IN (${areas.map((id) => `'${id}'`).join(",")}) 
    INNER JOIN 
        Equipment E ON E.LineID IN (${lines.map((id) => `'${id}'`).join(",")}) 
    WHERE 
        p.PlantID ='${project.PlantID}';
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

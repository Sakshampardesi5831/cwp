import { badRequest, internalServerError, success } from "../../helpers";
import db from "../../config/db";
import Plant from "../../model/Plant";
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
  const { plantName, role } = request.query;
  try {
    const project = await Plant.findOne({ where: { PlantName: plantName } });
    console.log(project.PlantID);
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
        P.PlantID = '${project.PlantID}'
    `;
    const processors = await db.query(sql, { type: db.QueryTypes.SELECT });
    const areas = [];
    const productionLines = [];
    const equipment = [];
    processors.forEach((item) => {
      const areaExists = areas.some((area) => area.AreaID === item.AreaID);
      if (!areaExists) {
        areas.push({
          AreaID: item.AreaID,
          AreaName: item.AreaName,
          AreaDescription: item.AreaDescription,
        });
      }
      const lineExists = productionLines.some(
        (line) => line.LineID === item.LineID
      );
      if (!lineExists) {
        productionLines.push({
          LineID: item.LineID,
          LineName: item.LineName,
          LineDescription: item.LineDescription,
          AreaID: item.AreaID,
        });
      }
      equipment.push({
        EquipmentID: item.EquipmentID,
        EquipmentName: item.EquipmentName,
        EquipmentDescription: item.EquipmentDescription,
        LineID: item.LineID,
      });
    });
    const finalArray = {
      processing_areas: areas,
      production_lines: productionLines,
      equipment: equipment,
    };
    return success(
      request,
      response,
      finalArray,
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

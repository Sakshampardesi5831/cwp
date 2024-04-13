import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import db from "../../config/db";
import Plant from "../../model/Plant";
import Area from "../../model/Area";
import Lines from "../../model/Line";
import Form from "../../model/Form";
import Equipment from "../../model/Equipment";
import Plants from "../../model/Plant";
export const getDailyManagerForms = async (request, response, next) => {
  const { plant, shift, areas, lines, equipments, date } = request.query;
  try {
   return  success(request, response, "success")
  } catch (error) {
      return internalServerError(request,response,error.message,"Internal Server error");
  }

  // const project = await Plant.findOne({ where: { PlantName: plant } });
  // console.log(project.PlantID);
  // const allForm = await Form.findAll({});
  // console.log(allForm);
  // const formId = allForm[0].FormID;
  // const formName = allForm[0].FormName;
  // const formDescription = allForm[0].Description;
  // try {
  //   const sql = `
  //   SELECT DISTINCT
  //     A.AreaID,
  //     A.AreaName,
  //     A.Description AS AreaDescription,
  //     L.LineID,
  //     L.LineName,
  //     L.Description AS LineDescription,
  //     E.EquipmentID,
  //     E.EquipmentName,
  //     E.Description AS EquipmentDescription
  //   FROM
  //     Plants p
  //   INNER JOIN
  //     Areas A ON p.PlantID = A.PlantID
  //   INNER JOIN
  //     [Lines] L ON L.AreaID IN (${areas.map((id) => `'${id}'`).join(",")})
  //   INNER JOIN
  //     Equipment E ON E.LineID IN (${lines.map((id) => `'${id}'`).join(",")})
  //   WHERE
  //     p.PlantID ='${project.PlantID}';
  // `;
  //   const processors = await db.query(sql, { type: db.QueryTypes.SELECT });
  //   let areaNames = [];
  //   let lineNames = [];
  //   let equipmentNames = [];

    
  //   areaNames = [];
  //   lineNames = [];
  //   equipmentNames = [];
  //   processors.map((item, index) => {
  //     areaNames.push(item.AreaName);
  //     lineNames.push(item.LineName);
  //     equipmentNames.push(item.EquipmentName);
  //   });
  //   const transformedData = allForm.map((item, index) => ({
  //     id: item.FormID,
  //     name: item.FormName,
  //     description: item.Description,
  //     date: date,
  //     plant: plant,
  //     shift: shift,
  //     areas: areaNames,
  //     lines: lineNames,
  //     equipments: equipmentNames,
  //   }));

  //   return success(request, response, transformedData);
  // } catch (error) {
  //   return internalServerError(
  //     request,
  //     response,
  //     error.message,
  //     "Internal server error"
  //   );
  // }
  
};
export const getDailyManagerForms2 = async (request, response, next) => {
  const { plant, shift, areas, lines, equipments, date } = request.query;
  const project = await Plant.findOne({ where: { PlantName: plant } });
  console.log(project.PlantID);

  // try {
  //   const data = await Area.findAll({
  //     where: {
  //       AreaName: areas,
  //     },
  //   });
  //   let myareas = data.map((item) => item.AreaID);
  //   const linesData = await Lines.findAll({
  //     where: {
  //       LineName: lines,
  //     },
  //   });
  //   let mylines = linesData.map((item) => item.LineID);
  //   const sql = `
  //   SELECT DISTINCT
  //     A.AreaID,
  //     A.AreaName,
  //     A.Description AS AreaDescription,
  //     L.LineID,
  //     L.LineName,
  //     L.Description AS LineDescription,
  //     E.EquipmentID,
  //     E.EquipmentName,
  //     E.Description AS EquipmentDescription
  //   FROM
  //     Plants p
  //   INNER JOIN
  //     Areas A ON p.PlantID = A.PlantID
  //   INNER JOIN
  //     [Lines] L ON L.AreaID IN (${myareas.map((id) => `'${id}'`).join(",")})
  //   INNER JOIN
  //     Equipment E ON E.LineID IN (${mylines.map((id) => `'${id}'`).join(",")})
  //   WHERE
  //     p.PlantID ='${project.PlantID}';
  // `;
  //   const processors = await db.query(sql, { type: db.QueryTypes.SELECT });
  //   console.log(processors);
  //   return success(request, response, variableData);
  // } catch (error) {
  //   return internalServerError(
  //     request,
  //     response,
  //     error.message,
  //     "Internal server error"
  //   );
  // }
  try {
    
  } catch (error) {
    console.error("Error fetching distinct data:", error);
    throw error;
  }
};

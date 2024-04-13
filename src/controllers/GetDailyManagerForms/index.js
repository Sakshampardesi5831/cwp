import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import db from "../../config/db";
import Plant from "../../model/Plant";
import Area from "../../model/Area";
import Line from "../../model/Line";
import Form from "../../model/Form";
import Equipment from "../../model/Equipment";
import Plants from "../../model/Plant";
import FormEqiupment from "../../model/Form_Equipment";
import { HasMany, HasOne, Sequelize } from "sequelize";
export const getDailyManagerForms = async (request, response, next) => {
  const { plant, shift, areas, lines, equipments } = request.query;
  try {
    const result = await FormEqiupment.findAll({
      include: [
        {
          model: Form,
          as: "Form",
          association: new HasOne(FormEqiupment, Form, {
            sourceKey: "FormId",
            foreignKey: "FormID",
            constraints: false,
          }),
          required: true,
        },
        {
          model: Line,
          as: "Line",
          association: new HasMany(FormEqiupment, Line, {
            sourceKey: "LineId",
            foreignKey: "LineID",
            constraints: false,
          }),
          required: true,
        },
        {
          model: Equipment,
          as: "Equipment",
          association: new HasMany(FormEqiupment, Equipment, {
            sourceKey: "EquipmentId",
            foreignKey: "EquipmentID",
            constraints: false,
          }),
          required: true,
        },
      ],

      where: {
        PlantId: plant,
        ShiftId: shift,
        AreaId: areas,
        LineId: lines,
        EquipmentId: equipments,
      },
    });

    return success(request, response, result);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal Server error"
    );
  }
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

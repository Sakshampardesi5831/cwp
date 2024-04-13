import { badRequest, internalServerError, success } from "../../helpers";
import db from "../../config/db";
import Plant from "../../model/Plant";
import Area from "../../model/Area";
import { HasMany } from "sequelize";
import Equipment from "../../model/Equipment";
import Line from "../../model/Line";
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
    const result = await Plant.findAll({
      include: [
        {
          model: Area,
          as: "Plant",
          association: new HasMany(Plant, Area, {
            targetKey: "PlantID",
            foreignKey: "PlantID",
            constraints: false,
          }),
          required: true,
          include: {
            model: Line,
            as: "Line",
            association: new HasMany(Area, Line, {
              targetKey: "AreaId",
              foreignKey: "AreaID",
              constraints: false,
            }),
            required: true,
            include: {
              model: Equipment,
              as: "Equipment",
              association: new HasMany(Line, Equipment, {
                targetKey: "LineID",
                foreignKey: "LineID",
                constraints: false,
              }),
              required: true,
            },
          },
        },
      ],
      where: {
        PlantName: plantName,
      },
    });
    let processingAreas = [];
    let processingLines = [];
    let processingEquipments = [];

    for (let i = 0; i < result.length; i++) {
      const row = result[i];
      const areas = row.Areas;

      areas.forEach((area) => {
        processingAreas.push({
          AreaID: area.AreaID,
          AreaName: area.AreaName,
          Description: area.Description,
        });

        area.Lines.forEach((line) => {
          processingLines.push({
            LineID: line.LineID,
            LineName: line.LineName,
            AreaID: line.AreaID,
            Description: line.Description,
          });
          line.Equipment.forEach((equipment) => {
            processingEquipments.push({
              EquimentId: equipment.EquipmentID,
              EquipmentName: equipment.EquipmentName,
              Description: equipment.Description,
              LineID: equipment.LineID,
            });
          });
        });
      });
    }
    return success(request, response, {
      processing_areas: processingAreas,
      production_lines: processingLines,
      equipments: processingEquipments,
    });
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal Server Error"
    );
  }
};

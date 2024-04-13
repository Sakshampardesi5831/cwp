import QuestionMapping from "../../model/Question_Mapping";
import Frequency from "../../model/Frequency";
import { internalServerError, success } from "../../helpers";
import Question from "../../model/Question";
import { HasMany } from "sequelize";
import Form from "../../model/Form";
import Equipment from "../../model/Equipment";
import Plant from "../../model/Plant";
import Shift from "../../model/Shift";

export const getDmsForms = async (request, response, next) => {
  const { FormId ,PlantId ,ShiftId  } = request.query;
  const { formId } = request.params;
  try {
    const result = await QuestionMapping.findAll({
      include: [
        {
          model: Question,
          as: "Question",
          association: new HasMany(QuestionMapping, Question, {
            sourceKey: "QuestionId",
            foreignKey: "QuestionID",
            constraints: false,
          }),
          required: true,
        },
      ],

      where: {
        FormId: formId,
      },
    });

    const form = await Form.findOne({
      where: {
        FormID: formId,
      },
    });

    const plant = await Plant.findOne({
      where: {
        PlantID: PlantId,
      },
    });

    const shift = await Shift.findOne({
      where: {
        ShiftID: ShiftId,
      },
    });

    const questions = result.reduce((acc, obj) => {
      if (obj.Questions && obj.Questions.length > 0) {
        acc.push(...obj.Questions);
      }
      return acc;
    }, []);

    const resultObject = {
      plant: plant.PlantName,
      form: form.FormName,
      shift: shift.ShiftName,
      Questions: questions,
    };

    return success(request, response, resultObject);
  } catch (error) {
    return internalServerError(
      request,
      response,
      error.message,
      "Internal Server error"
    );
  }
};

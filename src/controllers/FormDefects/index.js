import {
  internalServerError,
  badRequest,
  success,
} from "../../helpers/api-response";
import FormDefect from "../../model/FormDefect";
import Images from "../../model/Images/Images";
export async function saveFormDefects(request, response, next) {
  const {
    dms_form_id,
    form_id,
    line_id,
    equipment_id,
    question_id,
    category,
    comment,
    createdBY,
    images,
  } = request.body;
  console.log(request.body);
  try {
    const uploadImages = await Images.create({
      Images: JSON.stringify(images),
    });
    const creationDate = new Date("2025-05-24");
    const formDefect = await FormDefect.create({
      DMS_FORM_ID: dms_form_id,
      FormID: form_id,
      LineID: line_id,
      EquipmentID: equipment_id,
      QuestionsId: question_id,
      Category: category,
      Comment: comment,
      createdBY: createdBY,
      ImagesId: uploadImages.ImageId,
    });
    return success(request, response, formDefect);
  } catch (error) {
    return internalServerError(request, response, error.message);
  }
}

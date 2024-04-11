import { createDmsFormSubmit,getDmsFormSubmit} from "../../controllers/DMS-FORM-SUBMIT";

export const dmsFormSubmitRoute = (app) => {
  app.post("/dms-forms/submit",createDmsFormSubmit);
  app.get("/host/dms-forms/:formId/questions", getDmsFormSubmit);
};
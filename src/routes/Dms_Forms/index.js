import { getDmsForms } from "../../controllers/DmsForms";

export const dmsForms = (app) => {
    app.get("/host/dms-forms/:formId/questions",getDmsForms);
    
  };
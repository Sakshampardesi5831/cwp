import { getDailyManagerForms,getDailyManagerForms2} from "../../controllers/GetDailyManagerForms";
import FormEqiupment from '../../model/Form_Equipment';
export const dailyManagerFormsRouter = (app) => {
  app.post("/api/daily-management-forms",getDailyManagerForms);
  app.get("/api/daily-management-forms2", getDailyManagerForms2);
};
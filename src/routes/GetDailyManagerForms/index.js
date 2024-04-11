import { getDailyManagerForms} from "../../controllers/GetDailyManagerForms";

export const dailyManagerFormsRouter = (app) => {
  app.get("/api/daily-management-forms",getDailyManagerForms);
};
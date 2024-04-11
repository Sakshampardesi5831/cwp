import { getDailyManagerForms} from "../../controllers/GetDailyManagerForms";

export const dailyManagerFormsRouter = (app) => {
  app.get("/getDailyManager",getDailyManagerForms);
};
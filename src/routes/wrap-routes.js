import { healthRouter } from "./health";
import { usersRouter } from "./Users";
import {AreaRouter} from './Area';
import {PlantRouter} from './Plant';
import { lineRouter } from "./Lines";
import { equipmentRouter } from "./Equipment";
import { processorsRouter } from "./Processors";
import { dailyManagerFormsRouter } from "./GetDailyManagerForms";
export const wrapRoutes = (app) => {
  healthRouter(app);
  usersRouter(app);
  AreaRouter(app);
  PlantRouter(app);
  lineRouter(app);
  equipmentRouter(app);
  processorsRouter(app);
  dailyManagerFormsRouter(app);
};

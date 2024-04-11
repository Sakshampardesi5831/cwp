import { getProcessors} from "../../controllers/Processors";

export const processorsRouter = (app) => {
  app.get("/getProcessors",getProcessors);
};
import { getProcessors} from "../../controllers/Processors";

export const processorsRouter = (app) => {
  app.get("/processing-resources",getProcessors);
};
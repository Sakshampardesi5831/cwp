import { saveArea} from "../../controllers/Area";

export const AreaRouter = (app) => {
  app.post("/saveArea",saveArea);
};
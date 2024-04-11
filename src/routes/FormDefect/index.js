import { saveFormDefects} from "../../controllers/FormDefects";

export const formDefectRouter = (app) => {
  app.post("/defects",saveFormDefects);
};
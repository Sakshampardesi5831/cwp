import { savePlant} from "../../controllers/Plant";

export const PlantRouter = (app) => {
  app.post("/savePlant",savePlant);
};
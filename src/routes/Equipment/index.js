import { saveEquipment} from "../../controllers/Equipment";

export const equipmentRouter = (app) => {
  app.post("/saveEquipment",saveEquipment);
};
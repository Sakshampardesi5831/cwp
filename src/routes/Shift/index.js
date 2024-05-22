import { getCategory, getFrequency, getShift, saveShift } from "../../controllers/Shift";

export async function saveShiftRoutes(app) {
  app.post("/shift", saveShift);
  app.get("/shift", getShift);
  app.get("/get-category", getCategory);
  app.get("/get-frequency", getFrequency);
}
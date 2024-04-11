import { saveLine } from "../../controllers/Line";

export const lineRouter = (app) => {
  app.post("/saveLine", saveLine);
};

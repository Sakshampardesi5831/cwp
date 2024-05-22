import { getPending, pendingCon } from "../../controllers/pendingCon";

export const pending = (app) => {
  app.post("/pending", pendingCon);
  app.get("/get-pending", getPending);
};

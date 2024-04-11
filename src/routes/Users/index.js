import { SaveUser } from "../../controllers/Processors";

export const usersRouter = (app) => {
  app.get("/get",SaveUser);
};
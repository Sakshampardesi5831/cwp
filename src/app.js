import express, { json } from "express";
import { wrapRoutes } from "./routes/wrap-routes";
const app = express();

app.use(json());

const PORT = process.env.PORT || 3000;
wrapRoutes(app);
console.log(process.env.SYNC_SEQ);

app.listen(PORT, () => console.log(`App listening at port ${PORT}` , process.env.SYNC_SEQ));

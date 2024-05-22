// import { healthRouter } from "./health";
// import { usersRouter } from "./Users";
// import { AreaRouter } from "./Area";
// import { PlantRouter } from "./Plant";
// import { lineRouter } from "./Lines";
// import { equipmentRouter } from "./Equipment";
// import { processorsRouter } from "./Processors";
// import { dailyManagerFormsRouter } from "./GetDailyManagerForms";
// import { formDefectRouter } from "./FormDefect";
// import { dmsFormSubmitRoute } from "./DMS-FORM-SUBMIT";
// import { questionsRouter } from "./Questions";
// import { formRouter } from "./Form";
// import { createFormEquipmentRoute } from "./Form_Equipment";
// import { saveShiftRoutes } from "./Shift";

import { pending } from "./pendding";

// import { dmsForms } from "./Dms_Forms";
export const wrapRoutes = (app) => {
  // healthRouter(app);
  // usersRouter(app);
  // AreaRouter(app);
  // PlantRouter(app);
  // lineRouter(app);
  // equipmentRouter(app);
  // processorsRouter(app);
  // dailyManagerFormsRouter(app);
  // formDefectRouter(app);
  // dmsFormSubmitRoute(app);
  // questionsRouter(app);
  // formRouter(app);
  // createFormEquipmentRoute(app);
  // saveShiftRoutes(app);
  // dmsForms(app)
  pending(app);
};

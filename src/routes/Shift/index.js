import {saveShift} from '../../controllers/Shift';


export async function saveShiftRoutes(app){
    app.post('/shift', saveShift)
}
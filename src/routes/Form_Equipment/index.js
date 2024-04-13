import {createFormEquipment} from '../../controllers/Form_Equipment';

export const createFormEquipmentRoute = (app) => {
    app.post('/form_equipment', createFormEquipment);
}
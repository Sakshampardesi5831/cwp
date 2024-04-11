import {createForm} from '../../controllers/Form';

export const formRouter=(app)=>{
    app.post("/saveForm",createForm)
}
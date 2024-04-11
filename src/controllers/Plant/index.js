import {success,internalServerError,badRequest} from '../../helpers/api-response';
import Plant from '../../model/Plant';
export const savePlant = async  (request,response,next)=>{
    const {PlantName,Location,TimeZone,PlantZone} =request.body;
    try {
        const plant= await Plant.create(
            {
                PlantName:PlantName,
                Location:Location,
                TimeZone:TimeZone,
                PlantZone:PlantZone,
            }
        );
        return success(request,response,plant);
    } catch (error) {
        return internalServerError(request, response, error.message);
    }

}
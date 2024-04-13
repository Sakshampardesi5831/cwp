import {success,internalServerError,badRequest} from '../../helpers/api-response';
import Shift from '../../model/Shift';
export async function saveShift(request,response,next){
    const {ShiftName,Description,StartTime,EndTime}=request.body;
    try {
        const shift =await Shift.create({
            ShiftName,
            Description,
            StartTime: new Date().toISOString(),
            EndTime: new Date().toISOString()  
        })
        return success(request,response,shift);
    } catch (error) {
        return internalServerError(request,response,error.message);
    }
}
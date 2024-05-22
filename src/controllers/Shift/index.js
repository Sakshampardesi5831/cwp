import {
  success,
  internalServerError,
  badRequest,
} from "../../helpers/api-response";
import Frequency from "../../model/Frequency";
import Shift from "../../model/Shift";
export async function saveShift(request, response, next) {
  const { ShiftName, Description, StartTime, EndTime } = request.body;
  try {
    const shift = await Shift.create({
      ShiftName,
      Description,
      StartTime: new Date().toISOString(),
      EndTime: new Date().toISOString(),
    });
    return success(request, response, shift);
  } catch (error) {
    return internalServerError(request, response, error.message);
  }
}

export async function getShift(request, response, next) {
  try {
    const shift = await Shift.findAll();
    return success(request, response, shift);
  } catch (error) {
    return internalServerError(request, response, error.message);
  }
}

export async function getCategory(request, response, next) {
  try {
    const data = [
      { label: "Mechanical", value: "Mechanical" },
      { label: "Cleaning", value: "Cleaning" },
    ];

    return success(request, response, data);
  } catch (error) {
    return internalServerError(request, response, error.message);
  }
}

export async function getFrequency(request, response, next) {
  try {
    const shift = await Frequency.findAll();
    return success(request, response, shift);
  } catch (error) {
    return internalServerError(request, response, error.message);
  }
}

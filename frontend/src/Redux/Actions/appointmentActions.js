import { APPOINTMENT_ADD_REQUEST, APPOINTMENT_ADD_SUCCESS } from "../Constants/appointmentsConstants"


export const addAppointment=(id,appointment)=>async(dispatch)=>{
    try {
        dispatch({
            type:APPOINTMENT_ADD_REQUEST
        })
        const {data}=axios.put(`http://localhost:5000/api/patient/${id}/newAppointment`,appointment)
        dispatch({
            type:APPOINTMENT_ADD_SUCCESS,
            payload:data
        })
    } catch {
        dispatch({type:USER_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}
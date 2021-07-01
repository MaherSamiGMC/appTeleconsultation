import { APPOINTMENT_ADD_FAIL, APPOINTMENT_ADD_REQUEST, APPOINTMENT_ADD_SUCCESS } from "../Constants/appointmentsConstants"
import axios from 'axios'


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
    } catch (error) {
        dispatch({type:APPOINTMENT_ADD_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}
import { APPOINTMENT_ADD_FAIL, APPOINTMENT_ADD_REQUEST, APPOINTMENT_ADD_SUCCESS, APPOINTMENT_DELETE_FAIL, APPOINTMENT_DELETE_REQUEST, APPOINTMENT_DELETE_SUCCESS, APPOINTMENT_UPDATE_FAIL, APPOINTMENT_UPDATE_REQUEST, APPOINTMENT_UPDATE_SUCCESS } from "../Constants/appointmentsConstants"
import axios from 'axios'


export const addAppointment=(id,appointment)=>async(dispatch)=>{
    try {
        dispatch({
            type:APPOINTMENT_ADD_REQUEST
        })
        const {data}=await axios.put(`http://localhost:5000/api/patient/${id}/newAppointment`,appointment)
        dispatch({
            type:APPOINTMENT_ADD_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({type:APPOINTMENT_ADD_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

export const updateAppointment=(id,appointment)=>async(dispatch)=>{
    try {
        dispatch({
            type:APPOINTMENT_UPDATE_REQUEST
        })
        const {data}=await axios.put(`http://localhost:5000/api/patient/${id}/updateAppointment`,appointment)
        dispatch({
            type:APPOINTMENT_UPDATE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({type:APPOINTMENT_UPDATE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}
export const deleteAppointment=(id,appointment)=>async(dispatch)=>{
    try {
        dispatch({
            type:APPOINTMENT_DELETE_REQUEST
        })
        const {data}=await axios.put(`http://localhost:5000/api/patient/${id}/deleteAppointment`,appointment)
        dispatch({
            type:APPOINTMENT_DELETE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({type:APPOINTMENT_DELETE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}
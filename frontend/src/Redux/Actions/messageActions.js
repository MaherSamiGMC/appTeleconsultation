import axios from 'axios'
import { MESSAGE_ADDED_FAIL, MESSAGE_ADDED_REQUEST, MESSAGE_ADDED_SUCCESS, MESSAGE_UPDATE_FAIL, MESSAGE_UPDATE_REQUEST, MESSAGE_UPDATE_SUCCESS } from '../Constants/MessageConstants'


export const addMessage=(id,message)=>async(dispatch)=>{
    try {
        dispatch({
            type:MESSAGE_ADDED_REQUEST
        })
        const {data}=await axios.put(`http://localhost:5000/api/patient/${id}/newMessage`,message)
        dispatch({
            type:MESSAGE_ADDED_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({type:MESSAGE_ADDED_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

export const updateMessage=(id,message)=>async(dispatch)=>{
    try {
        dispatch({
            type:MESSAGE_UPDATE_REQUEST
        })
        const {data}=await axios.put(`http://localhost:5000/api/patient/${id}/updateMessage`,message)
        dispatch({
            type:MESSAGE_UPDATE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({type:MESSAGE_UPDATE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}
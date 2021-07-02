import { APPOINTMENT_ADD_FAIL, APPOINTMENT_ADD_REQUEST, APPOINTMENT_ADD_SUCCESS, APPOINTMENT_DELETE_FAIL, APPOINTMENT_DELETE_REQUEST, APPOINTMENT_DELETE_SUCCESS, APPOINTMENT_UPDATE_FAIL, APPOINTMENT_UPDATE_REQUEST, APPOINTMENT_UPDATE_SUCCESS } from "../Constants/appointmentsConstants"


export const appointmentAddReducer=(state={},action)=>{
    switch (action.type) {
        case APPOINTMENT_ADD_REQUEST:
            return {loading:true}
        case APPOINTMENT_ADD_SUCCESS:
            return {loading:false,appointmentInfo:action.payload}
        case APPOINTMENT_ADD_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const appointmentUpdateReducer=(state={},action)=>{
    switch (action.type) {
        case APPOINTMENT_UPDATE_REQUEST:
            return {loading:true}
        case APPOINTMENT_UPDATE_SUCCESS:
            return {loading:false,appointmentInfo:action.payload}
        case APPOINTMENT_UPDATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const appointmentDeleteReducer=(state={},action)=>{
    switch (action.type) {
        case APPOINTMENT_DELETE_REQUEST:
            return {loading:true}
        case APPOINTMENT_DELETE_SUCCESS:
            return {loading:false,appointmentInfo:action.payload}
        case APPOINTMENT_DELETE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
import { APPOINTMENT_ADD_FAIL, APPOINTMENT_ADD_REQUEST, APPOINTMENT_ADD_SUCCESS } from "../Constants/appointmentsConstants"


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
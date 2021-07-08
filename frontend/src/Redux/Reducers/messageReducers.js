import { MESSAGE_ADDED_FAIL, MESSAGE_ADDED_REQUEST, MESSAGE_ADDED_SUCCESS, MESSAGE_UPDATE_FAIL, MESSAGE_UPDATE_REQUEST, MESSAGE_UPDATE_SUCCESS } from "../Constants/MessageConstants"

export const messageAddReducer=(state={},action)=>{
    switch (action.type) {
        case MESSAGE_ADDED_REQUEST:
            return {loading:true}
        case MESSAGE_ADDED_SUCCESS:
            return {loading:false,messagetInfo:action.payload}
        case MESSAGE_ADDED_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const MessageUpdateReducer=(state={},action)=>{
    switch (action.type) {
        case MESSAGE_UPDATE_REQUEST:
            return {loading:true}
        case MESSAGE_UPDATE_SUCCESS:
            return {loading:false,messagetInfo:action.payload}
        case MESSAGE_UPDATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { deleteUserReducer, userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './Reducers/userReducers'
import { appointmentAddReducer, appointmentDeleteReducer, appointmentUpdateReducer } from './Reducers/appointmentReducers'




const reducer=combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    //appointmens
    appointmentAdd:appointmentAddReducer,
    appointmentUpdate:appointmentUpdateReducer,
    appointmentDelete:appointmentDeleteReducer,
    deleteUser:deleteUserReducer
})

const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initState={
    userLogin:{userInfo:userInfoFromStorage}


}

const middleware=[thunk]

const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default store
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './Reducers/userReducers'




const reducer=combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer
})

const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initState={
    userLogin:{userInfo:userInfoFromStorage}


}

const middleware=[thunk]

const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default store
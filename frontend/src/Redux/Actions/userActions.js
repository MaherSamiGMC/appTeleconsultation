import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../Constants/userConstants"
import axios from 'axios'

export const Login =(role,email,password)=> async(dispatch,done)=>{
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data}=await axios.post(`http://localhost:5000/api/${role}/login`,{email,password},config)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})

        localStorage.setItem('userInfo',JSON.stringify(data))
        done()


    } catch (error) {
        dispatch({type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

export const logout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
    
}

export const Register =(role,newRole,newuser)=> async(dispatch)=>{
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}=await axios.post(`http://localhost:5000/api/${role}/${newRole}`,newuser,config)
        
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        // localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

export const Getuserdetails =(role,id,auth)=> async(dispatch,getState)=>{
    try {
        dispatch({
            type:USER_DETAILS_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        console.log(userInfo)
        const config={
            headers:{
                'Content-Type':'application/json',
                authorization:userInfo[auth].token
            }
        }
        const {data}=await axios.get( `http://localhost:5000/api/${role}/${id}`,config)
        dispatch({type:USER_DETAILS_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:USER_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

export const updateUserProfile =(user)=> async(dispatch,getState)=>{
    try {
        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data}=await axios.put( `http://localhost:5000/api/users/profile`,user,config)
        dispatch({type:USER_UPDATE_PROFILE_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:USER_UPDATE_PROFILE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}
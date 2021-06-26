import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Login } from '../../Redux/Actions/userActions'
import Message from '../../Components/LandingPage/Message'
import Loader from '../../Components/LandingPage/Loader'

function LoginScreen({history}) {
    const [type, setType] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const redirect=location.search ? location.search.split('=')[1]:'/'
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {Loading,error,userInfo}=userLogin


    useEffect(()=>{
        if (userInfo){
            // history.push('/Dashboard')
        }
    },[])

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(Login(type,email,password))
        console.log(userInfo)
        if ( userInfo.authDoctor &&  userInfo.authDoctor.role==='doctor'){
            history.push('/Dashboard')
        }else if ( userInfo.authPatient && userInfo.authPatient.role==='patient'){
            history.push('/Portail')
        }
    }

    return (
<div className="maincontainer">

        <div class="container-fluid">

            <div class="row no-gutter">

                <div class="col-md-6 d-none d-md-flex bg-image bg-imageL"></div>

                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                {error && <Message variant='danger'>"email ou mot de passe invalide"</Message>}
                                {Loading && <Loader/>}
                                    <h3 class="display-8">Accès à la Plateforme de téléconsultation</h3>
                                    <p class="text-muted mb-4">Entrez votre adresse email et mot de passe pour vous connecter.</p>
                                    <form>
                                        <div class="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required=""  value={email} onChange={(e)=>setEmail(e.target.value)} autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required=""  value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                            {/* <label for="customCheck1" class="custom-control-label">Remember password</label> */}
                                        </div>
                                        <div>
                                            <select onChange={(e)=>setType(e.target.value)} class="form-select form-select-lg mb-3" aria-label="Default select example">
                                                <option selected>Vous êtes : </option>
                                                <option  value="doctor">Praticien</option>
                                                <option  value="assistant">Assistant</option>
                                                <option  value="patient">Patient</option>
                                            </select>
                                        </div>
                                        <button type="submit" onClick={submitHandler} class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">se connecter</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default LoginScreen

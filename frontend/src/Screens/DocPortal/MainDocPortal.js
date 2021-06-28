import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { Getuserdetails } from '../../Redux/Actions/userActions'
import Message from '../../Components/LandingPage/Message'
import Loader from '../../Components/LandingPage/Loader'

import Header from '../../Components/LandingPage/Header'
import Footer from '../../Components/LandingPage/Footer'

const MainDocPortal = ({ history }) => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const userDetails = useSelector(state => state.userDetails)
    const {Loading,error,user}=userDetails

    useEffect(()=>{
        if (!userInfo){
            history.push('/connexion')
        } else {
        dispatch(Getuserdetails('Portail'))
        }
    },[dispatch,userInfo,history])

    return (
        <>  
            <Header />
            <Container>
                {Loader}
                {error && <Message variant='danger'>{error}</Message>}
                {/* <Portail userdetails={user.getPortail}/> */}
                Bienvenue
            </Container>
            <Footer />
        </>
    )
}

export default MainDocPortal

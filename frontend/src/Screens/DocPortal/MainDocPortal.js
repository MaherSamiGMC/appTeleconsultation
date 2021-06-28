import React, {useState, useEffect} from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { Getuserdetails } from '../../Redux/Actions/userActions'
import Message from '../../Components/LandingPage/Message'
import Loader from '../../Components/LandingPage/Loader'


const MainDocPortal = ({ history }) => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    const userDetails = useSelector(state => state.userDetails)
    const {Loading,error,user}=userDetails

    useEffect(()=>{
        if (!userInfo){
            history.push('/connexion')
        } else {
        dispatch(Getuserdetails('portail'))
        }
    },[dispatch,userInfo,history])

    return (
        <Container>
            {error && <Message variant='danger'>{error}</Message>}
            {/* <Portail userdetails={user.getPortail}/> */}
            Bienvenue
        </Container>
    )
}

export default MainDocPortal

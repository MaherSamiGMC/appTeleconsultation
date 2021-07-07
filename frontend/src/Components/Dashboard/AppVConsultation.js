import React from 'react'
import Datatable from 'react-bs-datatable';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {
    Link
  } from "react-router-dom";
import VideoPlayer from './VideoPlayer';
import Options from './Options';
import Notifications from './Notifications';
import {makeStyles} from '@material-ui/core/styles'
import { CAlert } from '@coreui/react';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

function AppVConsultation({userdetails}) {

    const classes=useStyles()
    const VCallAppointments=userdetails && userdetails.patients.map(el=>el.socketId===undefined ? {...el,socketId:''} : el).filter(el=>el.socketId.length>3)
    console.log(VCallAppointments)
    return (
        <div className="content-wrapper list-patients">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Session de Téléconsultation :</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                  <li className="breadcrumb-item active">téléconsultation</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}

            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <section className="col-lg-12 connectedSortable">
                {/* Custom tabs (Charts with tabs)*/}
                <div className="card">
                  <div className="card-header1">
                    <h3 className="card-title">
                      <i className="fas fa-users" />
                        {' '}session de téléconsultation :
                    </h3>
                    <div className={classes.wrapper}>
                    <VideoPlayer nameId={userdetails && `Dr.${userdetails.firstName} ${userdetails.lastName}`} />
                    <Options thecaller={true}>
                        <Notifications/>
                    </Options>
                    </div>     
                    <div> {
                      userdetails && VCallAppointments.length===0 ? 
                      <CAlert color="primary">Aucun patient en ligne actuellement </CAlert>
                      :
                      <>
                      <CAlert color="success">Patient(s) actuellement en ligne :</CAlert>
                      {
                        userdetails && VCallAppointments.map(el=><p>{el.firstName} {el.lastName} iddentifiant de l'appel : {el.socketId}</p>)
                      }
                      </>

                      }</div>
                  </div>{/* /.card-header */}
                  <div className="card-body">
                  
                  </div>{/* /.card-body */}
                </div>

              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    )
}

export default AppVConsultation
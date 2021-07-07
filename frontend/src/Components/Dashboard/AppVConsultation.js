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

import {Overlay} from 'react-bootstrap'

import CopyToClipboard from 'react-copy-to-clipboard';


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


  const [state,setState] = useState(false)
    const onCopy = () => {
      setState(true);
    };


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
                      <CAlert color="secondary">Aucun patient en ligne actuellement </CAlert>
                      :
                      <>
                      <CAlert color="success">Patient(s) actuellement en ligne :</CAlert>
                      <div className="table100 ver1 m-b-110">
                        <table className="table-datatable__root table">
                          <thead className="MuiTableHead-root thead">
                            <tr className="MuiTableRow-root thead-tr MuiTableRow-head">
                              <th>Nom </th>
                              <th>Prénom </th>
                              <th>ID Patient </th>
                              <th>Status </th>
                            </tr>
                          </thead>
                          <tbody className="MuiTableBody-root tbody">
                          
                        {
                          
                          userdetails && VCallAppointments.map(el => 
                          <tr className="MuiTableRow-root tbody-tr">
                            <td className="MuiTableCell-root MuiTableCell-body tbody-td">{el.firstName}</td>
                            <td className="MuiTableCell-root MuiTableCell-body tbody-td">{el.lastName}</td>
                            <CopyToClipboard onCopy={onCopy} text={el.socketId} >
                              <td className="MuiTableCell-root MuiTableCell-body tbody-td id-click">
                              {el.socketId}
                              </td>
                            </CopyToClipboard>
                            <td>{state == true ? <i class="fas fa-check-circle" style={{color: 'green'}}>Copied</i> : <i class="fas fa-check-circle"></i>}</td>
                          </tr>
                          )
                        }
                        
                        </tbody>
                        </table>
                      </div>
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

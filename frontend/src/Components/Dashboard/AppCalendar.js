import React from 'react'
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { ViewState,EditingState,IntegratedEditing } from '@devexpress/dx-react-scheduler';

import {
    Scheduler,
    WeekView,
    Appointments,
    DateNavigator,
    Toolbar,
    TodayButton,
    AppointmentTooltip,
    AppointmentForm
  } from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { addAppointment, deleteAppointment, updateAppointment } from '../../Redux/Actions/appointmentActions';

function AppCalendar({userdetails}) {

    const dispatch = useDispatch()
    // const state = useSelector(state =>state.userdetails && state.userdetails.patients && state.userdetails.patients.map(el=>el.appointments).flat())
    // console.log('state:',state)
        const listOfappointments=userdetails && userdetails.patients.map(el=>el.appointments).flat()
      
    const commitChanges=({ added, changed, deleted })=>{
        if (added) {
            // const startingAddedId = appointments.length > 0 ? appointments[appointments.length - 1].id + 1 : 0;
            // setAppointments([...appointments, { id: startingAddedId, ...added }])
            dispatch(addAppointment(added.patient,{...added,id:Date.now()}))

          }
          if (changed) {
            // setAppointments(appointments.map(appointment => (
            //   changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)))
            const updatedAppoitment={...listOfappointments.filter(el=>el.id===Object.keys(changed)[0])[0],...changed[Object.keys(changed)]}
            console.log('updatedAppoitment : ',updatedAppoitment)
            dispatch(updateAppointment(updatedAppoitment.patient,updatedAppoitment))

          }
          if (deleted !== undefined) {
            // setAppointments(appointments.filter(appointment => appointment.id !== deleted))
            const deleteappointment=listOfappointments.filter(el=>el.id===deleted)[0]
            dispatch(deleteAppointment(deleteappointment.patient,{deleted}))
          }
          console.log({ added, changed, deleted })
    }
    const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
      // if (userdetails){
        const ListOfpatients=userdetails.patients.map(el=>{return{id:el._id,text:`${el.firstName} ${el.lastName}`}})
      // }
      const onCustomFieldChange = (nextValue) => {
        onFieldChange({ patient: nextValue });
      };
    
      return (
        <AppointmentForm.BasicLayout
          appointmentData={appointmentData}
          onFieldChange={onFieldChange}
          {...restProps}
        >
          <AppointmentForm.Label
            text="Patient :"
            type="title"
          />
          <AppointmentForm.Select
            value={appointmentData.patient}
            onValueChange={onCustomFieldChange}
            availableOptions={[...ListOfpatients]}
          />
        </AppointmentForm.BasicLayout>
      );
    };

    const appointmentContent=({data, ...restProps})=>{
      // console.log("data :",data)
      return (
        <Appointments.AppointmentContent
        data={data}
        {...restProps}
        >
        <div >
            <div >
              {userdetails && userdetails.patients.filter(el=>el._id===data.patient)[0].firstName} <br/>
              {userdetails && userdetails.patients.filter(el=>el._id===data.patient)[0].lastName}

            </div>
            {/* <div className={classNames(classes.text, classes.content)}>
              {`Priority: ${priority}`}
            </div>
            <div className={classNames(classes.text, classes.content)}>
              {`Location: ${data.location}`}
            </div> */}
        </div>
        </Appointments.AppointmentContent>

      )
    }
    const useStyles = makeStyles(theme => ({
        todayCell: {
          backgroundColor: fade(theme.palette.primary.main, 0.1),
          '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.14),
          },
          '&:focus': {
            backgroundColor: fade(theme.palette.primary.main, 0.16),
          },
        },
        weekendCell: {
          backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
          '&:hover': {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
          },
          '&:focus': {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
          },
        },
        today: {
          backgroundColor: fade(theme.palette.primary.main, 0.16),
        },
        weekend: {
          backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
        },
      }));
      
      const TimeTableCell = (props) => {
        const classes = useStyles();
        const { startDate } = props;
        const date = new Date(startDate);
      
        if (date.getDate() === new Date().getDate()) {
          return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
        } if (date.getDay() === 0 || date.getDay() === 6) {
          return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
        } return <WeekView.TimeTableCell {...props} />;
      };
      
      const DayScaleCell = (props) => {
        const classes = useStyles();
        const { startDate, today } = props;
      
        if (today) {
          return <WeekView.DayScaleCell {...props} className={classes.today} />;
        } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
          return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
        } return <WeekView.DayScaleCell {...props} />;
      };

    return (

        <div className="content-wrapper list-patients">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Calendrier :</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                  <li className="breadcrumb-item active">Calendrier</li>
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
                        {' '}Reserver un rendez-vous :
                    </h3>

                  </div>{/* /.card-header */}
                  <div className="card-body">
               
                  {userdetails &&
                  <Paper>
                    <Scheduler
                    data={userdetails && userdetails.patients.map(el=>el.appointments).flat()}
                    locale="fr-FR"
                    height={660}
                    >
                    <ViewState />
                    <EditingState
                        onCommitChanges={commitChanges}
                    />
                    <IntegratedEditing />
                    <WeekView
                        startDayHour={9}
                        endDayHour={19}
                        timeTableCellComponent={TimeTableCell}
                        dayScaleCellComponent={DayScaleCell}
                    />
                    <Appointments 
                      appointmentContentComponent={appointmentContent}
                    />
                    <AppointmentTooltip
                        showCloseButton
                        showOpenButton
                        showDeleteButton
                    />
                    <AppointmentForm
                        messages={{detailsLabel:'Objet de la téléconsultation :',
                        titleLabel:'le sujet de la téléconsultation ',
                        moreInformationLabel:"Plus d'informations sur la session de téléconsultation"}}
                        basicLayoutComponent={BasicLayout}

                    />
                    <Toolbar />
                    <TodayButton messages={{today:'Aujourdhui'}} />
                    <DateNavigator />
                    </Scheduler>
                </Paper>}
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

export default AppCalendar

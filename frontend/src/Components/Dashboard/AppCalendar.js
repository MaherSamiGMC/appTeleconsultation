
import React from 'react'
import { useState } from 'react';
import {
    Link
  } from "react-router-dom";
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

function AppCalendar({userdetails}) {
    const [appointments, setAppointments] = useState([  {
        title: 'Website Re-Design Plan',
        startDate: new Date(2020, 5, 25, 9, 35),
        endDate: new Date(2020, 5, 25, 11, 30),
        id: 0,
        location: 'Room 1',
      }])

    const commitChanges=({ added, changed, deleted })=>{
        if (added) {
            const startingAddedId = appointments.length > 0 ? appointments[appointments.length - 1].id + 1 : 0;
            setAppointments([...appointments, { id: startingAddedId, ...added }])

          }
          if (changed) {
              console.log('aaa')
            setAppointments(appointments.map(appointment => (
              changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)))

          }
          if (deleted !== undefined) {
            setAppointments(appointments.filter(appointment => appointment.id !== deleted))
          }
          console.log({ added, changed, deleted })
          return { appointments};

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
               
                  <Paper>
                    <Scheduler
                    data={appointments}
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
                    <Appointments />
                    <AppointmentTooltip
                        showCloseButton
                        showOpenButton
                    />
                    <AppointmentForm

                    />
                    <Toolbar />
                    <TodayButton messages={{today:'Aujourdhui'}} />
                    <DateNavigator />
                    </Scheduler>
                </Paper>
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

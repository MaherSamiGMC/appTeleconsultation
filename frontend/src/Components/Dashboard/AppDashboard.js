import React from 'react'
import Datatable from 'react-bs-datatable';
import { css } from '@emotion/react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Grid,
  ButtonGroup
} from '@material-ui/core';
function AppDashboard({userdetails}) {
  const [value, onChange] = useState(new Date());

  const header = [
    { title: 'Nom', prop: 'firstName',sortable:true },
    { title: 'Prenom', prop: 'lastName' },
    { title: 'N° de telephone', prop: 'phoneNumber' },
    { title: 'Date de naissance', prop: 'dateOfBirth' }
  ];
  const classes = {
    buttonGroup: css`
      height: 100%;
    `,
    paginationButton: css`
      .ButtonGroup__root & {
        padding: 8px 12px;
      }
    `
  }
    return (
        <div className="content-wrapper list-patients">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Tableau de bord</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                  <li className="breadcrumb-item active">Tableau de bord</li>
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
            <div className="row">
              <div className="col-lg-4 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{userdetails && userdetails.patients.length}</h3>
                    <p>Nombre de patients</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-hospital-user" />
                  </div>
                  <a href="#" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-4 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h5>L'assistant(e) :</h5>
                    <p><br/> {userdetails && `${ userdetails.assistant.firstName} ${ userdetails.assistant.lastName}`}</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-clock" />
                  </div>
                  <a href="#" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-4 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>
                    <p>Nombre de rendez-vous</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-calendar-day" />
                  </div>
                  <a href="#" className="small-box-footer">Plus info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>

            </div>
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
                        {' '}liste des patients :
                    </h3>

                  </div>{/* /.card-header */}
                  <div className="card-body">
                  {userdetails && 
                  <Datatable 
                  tableHeaders={header} 
                  tableBody={userdetails.patients}  
                  rowsPerPage={3}
                  Components={{
                    Row(props) {
                      return <Grid container spacing={2} {...props} />;
                    },
                    Col(props) {
                      return <Grid item {...props} />;
                    },
                    Table,
                    TableHead,
                    TableBody,
                    TableCell,
                    TableRow,
                    ButtonGroup(props) {
                      return (
                        <ButtonGroup
                          {...props}
                          size="large"
                          variant="outlined"
                        />
                      );
                    },
                    Button(props) {
                      return (
                        <Button
                          {...props}
                        />
                      );
                    },
                    PaginationOptsGroup({ onChange, options, value }) {
                      const inputLabel = React.useRef(null);
                      const [labelWidth, setLabelWidth] = React.useState(0);
                      React.useEffect(() => {
                        if (inputLabel.current !== null) {
                          setLabelWidth(inputLabel.current.offsetWidth);
                        }
                      }, [inputLabel.current]);
              
                      return (
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                            Number of rows
                          </InputLabel>
                          <Select
                            value={value}
                            onChange={onChange}
                            margin="none"
                            input={
                              <OutlinedInput
                                labelWidth={labelWidth}
                                name="age"
                                id="outlined-age-simple"
                              />
                            }
                          >
                            {options.map(opt => (
                              <MenuItem value={opt} key={opt}>
                                {opt}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      );
                    }
                  }}
                  />}
                  </div>{/* /.card-body */}
                </div>

              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              <div className="col-lg-4 col-6">
                {/* small box */}
                <div>
                  <div className="inner">
                  <Calendar
                  onChange={onChange}
                  value={value}/>
                  </div>
                  <div className="icon">
                  </div>
                </div>
              </div>
              
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    )
}

export default AppDashboard

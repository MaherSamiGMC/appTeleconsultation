import React from 'react'
import Datatable from 'react-bs-datatable';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import ClearIcon from '@material-ui/icons/Clear';
import {
    Link
  } from "react-router-dom";
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
function AppListsOfPatients({userdetails}) {

  const header = [
    { title: 'Nom', prop: 'firstName',sortable:true,filterable: true },
    { title: 'Prenom', prop: 'lastName',filterable: true },
    { title: 'N° de telephone', prop: 'phoneNumber' },
    { title: 'Date de naissance', prop: 'dateOfBirth' },
    { title: 'Email', prop: 'email'} ,
    { title: 'Afficher le profil', prop: '_id',
      cell: row => <Link to={`Dashboard/list-of-patients/${row._id}`} > <i class="fas fa-external-link-alt"></i></Link>} ,
  ];

  const customLabels = {
    first: '<<',
    last: '>>',
    prev: '<',
    next: '>',
    show: 'Display',
    entries: 'rows',
    noResults: 'Pas de patients à afficher ',
    filterPlaceholder:"aa"
  };
  function FilterGroup({ classes, filterText, onChangeFilter, onClearFilter }) {
    return (
      <TextField
        fullWidth
        id="outlined-filter"
        label="Search text"
        className={classes.textField}
        value={filterText}
        onChange={onChangeFilter}
        margin="none"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={onClearFilter}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  }
    return (
        <div className="content-wrapper list-patients">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Liste des patients :</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                  <li className="breadcrumb-item active">Liste des patients</li>
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
              <div className="col-lg-12 col-6">
                {/* small box */}
                <div className="small-box ">
                  <div className="inner">
                    <h3>{userdetails && userdetails.patients.length}</h3>
                    <p>Nombre de patients</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-hospital-user" />
                  </div>
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
                  rowsPerPage={10}
                  labels={customLabels}
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
                    FilterGroup,
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
              
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    )
}

export default AppListsOfPatients

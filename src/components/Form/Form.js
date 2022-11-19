import {
  Box, Button, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import useStyles from './Form.style';
import useForm from './hooks/useForm';

function Form({ focusRef }) {
  const classes = useStyles();
  const {
    addClick,
    subClick,
    amountOfPeople,
    handleEmail,
    handleName,
    state,
    openDate,
    handleOpen,
    handleSubmit,
    isSubmitDisabled,
    handleClose,
    dispatch,
  } = useForm();
  const {
    name,
    email,
    count,
    dateValue,
    emailError,
    allError,
  } = state;
  return (
    <form className={classes.form}>
      <Box component="span" className={classes.errorMsg}>{allError}</Box>
      <Box className={classes.textFieldBox}>
        <TextField
          className={classes.textField}
          id="standard"
          label="Name"
          inputRef={focusRef}
          value={name}
          onChange={handleName}
          required
        />
      </Box>
      <Box className={classes.textFieldBox}>
        <TextField
          className={classes.textField}
          id="standard"
          label="Email"
          value={email}
          onChange={handleEmail}
          required
          validators={['required', 'isEmail']}
          errorMessages={['Email is required', 'Not a valid email address']}
        />
        <Box component="span" className={classes.errorMsg}>{emailError}</Box>
      </Box>
      <Box className={classes.dateBox}>
        <Typography className={classes.dateText}>Pick a date</Typography>
        <Box className={classes.date}>
          <TextField
            id="standard"
            label="DD"
            type="number"
            onFocus={handleOpen}
            value={dateValue && dateValue?.format('D')}
            onChange={handleClose}
          />
          <TextField
            id="standard"
            label="MM"
            type="number"
            onFocus={handleOpen}
            value={dateValue && dateValue?.format('MM')}
            onChange={handleClose}
          />
          <TextField
            id="standard"
            label="YYYY"
            type="number"
            onFocus={handleOpen}
            value={dateValue && dateValue?.format('YYYY')}
            onChange={handleClose}
          />
          {
            openDate
            && (
            <Box style={{
              position: 'absolute',
              right: 0,
              top: 150,
              left: -100,
              zIndex: 1,
            }}
            >
              <Datetime
                input={false}
                open={false}
                value={state?.dateValue}
                onChange={value => {
                  dispatch({ dateValue: value });
                  handleClose();
                }}
              />
            </Box>
            )
          }
        </Box>
      </Box>
      <Box className={classes.dateBox}>
        <Typography className={classes.dateText}>Pick a time</Typography>
        <Box className={classes.date}>
          <TextField
            id="standard"
            label="HH"
            type="number"
            onFocus={handleOpen}
            value={dateValue && dateValue?.format('HH')}
            onChange={handleClose}
          />
          <TextField
            id="standard"
            label="MM"
            type="number"
            onFocus={handleOpen}
            value={dateValue && dateValue?.format('mm')}
            onChange={handleClose}
          />
          {/* <TextField
            id="standard"
            value={dateValue && (dateValue?.format('aa'))}
            onChange={handleClose}
          /> */}
        </Box>
      </Box>

      <Box className={classes.amountBox}>
        <Button
          onClick={subClick}
          className={classes.calBtn}
          disabled={count === 1}
        >
          -
        </Button>
        <Box className={classes.amount}>
          {amountOfPeople}
        </Box>
        <Button
          onClick={addClick}
          className={classes.calBtn}
          disabled={count === 10}
        >
          +
        </Button>
      </Box>
      <Box>
        <Button
          disabled={isSubmitDisabled}
          className={classes.bookBtn}
          onClick={(e) => handleSubmit(e)}
        >
          MAKE RESERVATION
        </Button>
      </Box>
    </form>
  );
}

export default Form;

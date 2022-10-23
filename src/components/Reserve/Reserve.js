import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './Reserve.style';

function Reserve() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box className={classes.section1}>
      <Typography className={classes.reseveration}>Ready to make a reservation?</Typography>
      <Box
        className={classes.bookBtn}
        onClick={() => navigate('/Reservation')}
      >
        BOOK A TABLE
      </Box>
    </Box>
  );
}

export default Reserve;

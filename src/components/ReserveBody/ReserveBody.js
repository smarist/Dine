import { Box, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Dine } from '../../Images/logo.svg';
import Form from '../Form';
import useStyles from './ReserveBody.style';

function ReserveBody() {
  const classes = useStyles();
  const focusRef = useRef(null);
  const navigate = useNavigate();
  return (
    <>
      <Box className={classes.reserveBg}>
        <Box
          onClick={() => navigate('/')}
          className={classes.dine}
        >
          <Dine />
        </Box>
        <Box className={classes.section}>
          <Box className={classes.section1}>
            <Typography
              className={classes.reseveration}
            >
              Reservations
            </Typography>
            <Typography className={classes.reserveTypo}>
              We can’t wait to host you.
              If you have any special requirements please feel
              free to call on the phone number below.
              We’ll be happy to accommodate you.
            </Typography>
            <Box
              className={classes.bookBtn}
              onClick={() => focusRef.current.onfocus()}
            >
              RESERVE PLACE
            </Box>
          </Box>
          <Box className={classes.section2}>
            <Form focusRef={focusRef} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.whiteBg} />
    </>
  );
}

export default ReserveBody;

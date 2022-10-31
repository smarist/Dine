import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Dine } from '../../Images/logo.svg';
import Form from '../Form';
import useStyles from './ReserveBody.style';

function ReserveBody() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.reserveBg}>
        <Box className={classes.dine}><Dine /></Box>
        <Box className={classes.section1}>
          <Box>
            <Typography
              className={classes.reseveration}
            >
              Reservation
            </Typography>
            <Typography>
              We can’t wait to host you.
              If you have any special requirements please feel
              free to call on the phone number below.
              We’ll be happy to accommodate you.
            </Typography>
            <Box
              className={classes.bookBtn}
            >
              RESERVE PLACE
            </Box>
          </Box>
          <Box>
            <Form />
          </Box>
        </Box>
      </Box>
      <Box className={classes.whiteBg} />
    </>
  );
}

export default ReserveBody;

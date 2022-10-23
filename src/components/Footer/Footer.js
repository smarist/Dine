import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { ReactComponent as Dine } from '../../Images/logo.svg';
import useStyles from './Footer.style';

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footerBox}>
      <Box className={classes.section1}>
        <Typography className={classes.reseveration}>Ready to make a reservation?</Typography>
        <Box className={classes.bookBtn}>BOOK A TABLE</Box>
      </Box>
      <Box className={classes.section2}>
        <Box className={classes.dine}><Dine /></Box>
        <Box className={classes.textBox}>
          <Box className={classes.contactBox}>
            <Typography>Marthwaite, Sedbergh</Typography>
            <Typography>Cumbria</Typography>
            <Typography>+00 44 123 4567</Typography>
          </Box>
          <Box className={classes.contactBox}>
            <Typography>Open Times</Typography>
            <Typography>Mon - Fri: 09:00 AM - 10:00 PM</Typography>
            <Typography>Sat - Sun: 09:00 AM - 11:30 PM</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

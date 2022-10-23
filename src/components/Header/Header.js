import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './Header.style';
import { ReactComponent as Dine } from '../../Images/logo.svg';

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.headerBox}>
      <Box className={classes.section}>
        <Box><Dine /></Box>
        <Typography variant="h3" className={classes.text1}>
          Exquisite dining
          <br />
          since 2015
        </Typography>
        <Typography variant="p" className={classes.text2}>
          Experience our seasonal menu in beautiful country surrondings.
          Eat the freashest produce from the comfort of our farmhouse.
        </Typography>
        <Box
          className={classes.bookBtn}
          onClick={() => navigate('/Reservation')}
        >
          BOOK A TABLE
        </Box>
      </Box>
      <Box className={classes.headerImg} />
    </Box>
  );
}

export default Header;

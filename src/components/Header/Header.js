import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Header.style';

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.headerBox}>
      <Box>
        <Typography>dine</Typography>
        <Typography>Exquisite dining since 2015</Typography>
        <Typography>
          Experience our seasonal menu in beautiful country surrondings.
          Eat the freashest produce from the comfort of our farmhouse.
        </Typography>
        <Box>BOOK A TABLE</Box>
      </Box>
      <Box className={classes.headerImg}>
        Background img
      </Box>
    </Box>
  );
}

export default Header;

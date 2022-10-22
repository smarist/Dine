import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './MidSection.style';
import { ReactComponent as Divider } from '../../Images/divider.svg';

function MidSection() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.midBox} container>
        <Grid item xs={12} sm={12} md={6} className={classes.grid1}>
          <Box className={classes.img1} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.grid2}>
          <Box className={classes.box2}>
            <Divider />
            <Typography variant="h3" className={classes.text1}>
              Enjoyable place
              for all the family
            </Typography>
            <Typography className={classes.text2}>
              Our relaxed surroundings make dining with us a great experience for everyone.
              We can even arrange a tour of the farm before meal.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid className={classes.midBox2} container>
        <Grid item xs={12} sm={12} md={6} className={classes.gridd2}>
          <Box className={classes.box2}>
            <Divider />
            <Typography variant="h3" className={classes.text1}>
              The most locally
              sourced food
            </Typography>
            <Typography className={classes.text2}>
              All our ingredients come directly from our farm or
              local fishery. So you can be sure that you’re eating
              the freshest, most sustainable food.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.gridd1}>
          <Box className={classes.img2} />
        </Grid>
      </Grid>
    </>
  );
}

export default MidSection;

import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Menu.style';
import { ReactComponent as Divider } from '../../Images/divider.svg';

function Menu() {
  const classes = useStyles();
  return (
    <Grid className={classes.menuBox} container>
      <Grid item xs={12} sm={12} md={12} lg={6} className={classes.grid2}>
        <Box className={classes.box2}>
          <Divider />
          <Typography variant="h3" className={classes.text1}>
            A few highlights from our menu
          </Typography>
          <Typography className={classes.text2}>
            We cater for all dietary requirements, but here’s a
            glimpse at some of our diner’s favourites.
            Our menu is revamped every season.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} className={classes.grid1}>
        <Box className={classes.box1}>
          <Box className={classes.salmonImg} />
          <Box>
            <Typography className={classes.imgText1}>Seared Salmon Fillet</Typography>
            <Typography className={classes.imgText2}>
              Our locally sourced salmon served with a
              refreshing buckwheat summer salad.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.box11}>
          <Box className={classes.beefImg} />
          <Box>
            <Typography className={classes.imgText1}>Rosemary Filet Mignon</Typography>
            <Typography className={classes.imgText2}>
              Our prime beef served to your taste with a
              delicious choice of seasonal sides.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.box1}>
          <Box className={classes.chocolateImg} />
          <Box>
            <Typography className={classes.imgText1}>Summer Fruit Chocolate Mousse</Typography>
            <Typography className={classes.imgText2}>
              Creamy mousse combined with summer
              fruits and dark chocolate shavings.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Menu;

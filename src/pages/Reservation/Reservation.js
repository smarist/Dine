import React from 'react';
import useStyles from './Reservation.style';
import Footer from '../../components/Footer/Footer';

function Reservation() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Footer />
    </div>
  );
}

export default Reservation;

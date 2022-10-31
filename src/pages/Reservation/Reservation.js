import React from 'react';
import useStyles from './Reservation.style';
import Footer from '../../components/Footer/Footer';
import ReserveBody from '../../components/ReserveBody/ReserveBody';

function Reservation() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <ReserveBody />
      <Footer />
    </div>
  );
}

export default Reservation;

import React from 'react';
import { motion } from 'framer-motion';
import useStyles from './Reservation.style';
import Footer from '../../components/Footer/Footer';
import ReserveBody from '../../components/ReserveBody/ReserveBody';

function Reservation() {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.body}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ReserveBody />
      <Footer />
    </motion.div>
  );
}

export default Reservation;

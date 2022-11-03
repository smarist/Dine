import React from 'react';
import { motion } from 'framer-motion';
import EventType from '../../components/EventType';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useStyles from '../../components/Header/Header.style';
import Menu from '../../components/Menu';
import MidSection from '../../components/MidSection';
import Reserve from '../../components/Reserve';

function Home() {
  const classes = useStyles();
  return (
    <motion.div
      className={classes.body}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <MidSection />
      <Menu />
      <EventType />
      <Reserve />
      <Footer />
    </motion.div>
  );
}

export default Home;

import React from 'react';
import EventType from '../../components/EventType';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useStyles from '../../components/Header/Header.style';
import Menu from '../../components/Menu';
import MidSection from '../../components/MidSection';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Header />
      <MidSection />
      <Menu />
      <EventType />
      <Footer />
    </div>
  );
}

export default Home;

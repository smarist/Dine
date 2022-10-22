import React from 'react';
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
    </div>
  );
}

export default Home;

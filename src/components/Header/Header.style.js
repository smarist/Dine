import { makeStyles } from '@material-ui/core';
import HeaderImgMobile from '../../Images/hero-bg-mobile.jpg';
import HeaderImgDesktop from '../../Images/hero-bg-desktop.jpg';
import HeaderImgTablet from '../../Images/hero-bg-tablet.jpg';

const useStyles = makeStyles((theme) => ({
  headerBox: {
    backgroundColor: '#111111',
    color: '#FFFF',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      height: '100%',
    },
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 0px 10px 150px',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      marginTop: '-20px',
    },
  },
  text1: {
    fontWeight: '100',
    letterSpacing: '1.8px',
    wordSpacing: '2.4px',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.1em',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '150px',
      fontSize: '3.3em',
    },
  },
  text2: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '1em',
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '1.4em',
      width: '700px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1em',
      alignItems: 'left',
      textAlign: 'left',
      width: '400px',
    },
  },
  headerImg: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      backgroundImage: `url(${HeaderImgMobile})`,
      backgroundRepeat: 'no-repeat',
      height: '40vh',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${HeaderImgTablet})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '75vh',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${HeaderImgDesktop})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      backgroundPosition: 'right',
    },
  },
  bookBtn: {
    marginTop: '20px',
    width: '220px',
    height: '50px',
    padding: '4px',
    border: '2px solid white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      border: 'none',
      backgroundColor: '#FFF',
      color: '#111111',
    },
  },
}));

export default useStyles;

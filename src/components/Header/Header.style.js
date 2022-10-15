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
      height: '75vh',
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
      padding: '10px',
    },
  },
  text1: {
    fontWeight: '100',
    letterSpacing: '1px',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.1em',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '150px',
    },
  },
  text2: {
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  headerImg: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      backgroundImage: `url(${HeaderImgMobile})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      height: '30vh',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${HeaderImgTablet})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      height: '30vh',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${HeaderImgDesktop})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      height: '100%',
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

import { makeStyles } from '@material-ui/core';
import HeaderImgMobile from '../../Images/hero-bg-mobile.jpg';
import HeaderImgDesktop from '../../Images/hero-bg-desktop.jpg';
import HeaderImgTablet from '../../Images/hero-bg-tablet.jpg';

const useStyles = makeStyles((theme) => ({
  footerBox: {
    backgroundColor: '#111111',
    color: '#FFFF',
    // display: 'flex',
    overflowY: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none !important',
    },
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '1em',
      flexDirection: 'column',
      padding: '10px 0px',
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '1.4em',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '30px 100px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1em',
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '30px 100px',
      // gap: '300px',
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
      marginTop: '45%',
      fontSize: '3.2em',
    },
  },
  dine: {
    marginTop: '50px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '30px',
    },
  },
  textBox: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'column',
      // fontSize: '1em',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '40px',
      marginTop: '100px',
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '70%',
      // fontSize: '1.4em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1em',
      width: '50%',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
  contactBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '30px',
  },
}));

export default useStyles;

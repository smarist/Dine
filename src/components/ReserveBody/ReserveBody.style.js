import { makeStyles } from '@material-ui/core';
import HeaderImgMobile from '../../Images/hero-bg-mobil.jpg';
import HeaderImgDesktop from '../../Images/hero-bg-deskto.jpg';
import HeaderImgTablet from '../../Images/hero-bg-table.jpg';

const useStyles = makeStyles((theme) => ({
  reserveBg: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      backgroundImage: `url(${HeaderImgMobile})`,
      backgroundRepeat: 'no-repeat',
      height: '470px',
      backgroundSize: 'cover',
      padding: '20px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${HeaderImgTablet})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '80vh',
      padding: '40px 70px',
      display: 'flex',
      flexDirection: 'column',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${HeaderImgDesktop})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '400px',
      backgroundPosition: 'right',
      paddingTop: '50px',
    },
  },
  section: {
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      gap: '100px',
      marginTop: '22px',
    },
  },
  section1: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
    },
  },
  section2: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginTop: '40px',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      marginTop: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '500px',
      marginTop: '75px',
    },
  },
  reserveTypo: {
    marginTop: '20px !important',
    fontSize: '16px !important',
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
      width: '530px',
      fontSize: '1.3em',
    },
    [theme.breakpoints.up('lg')]: {
      width: '500px',
    },
  },
  dine: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '30px',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '20px',
    },
  },
  reseveration: {
    fontSize: '2.6em !important',
    marginTop: '40px !important',
    letterSpacing: '6px !important',
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
    fontSize: '1.1em',
    '&:hover': {
      border: 'none',
      backgroundColor: '#FFF',
      color: '#111111',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '40px',
    },
  },
  whiteBg: {
    backgroundColor: '#F9F9F9',
    [theme.breakpoints.down('sm')]: {
      height: '420px',
    },
    [theme.breakpoints.up('md')]: {
      height: '300px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '150px',
    },
  },
}));

export default useStyles;

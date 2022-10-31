import { makeStyles } from '@material-ui/core';
import HeaderImgMobile from '../../Images/hero-bg-mobil.jpg';
import HeaderImgDesktop from '../../Images/hero-bg-deskto.jpg';
import HeaderImgTablet from '../../Images/hero-bg-table.jpg';

const useStyles = makeStyles((theme) => ({
  reserveBg: {
    marginTop: '-49px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      backgroundImage: `url(${HeaderImgMobile})`,
      backgroundRepeat: 'no-repeat',
      height: '30vh',
      backgroundSize: 'cover',
      padding: '20px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${HeaderImgTablet})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '50vh',
      padding: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${HeaderImgDesktop})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '70vh',
      backgroundPosition: 'right',
      padding: '0px',
    },
  },
  section1: {
    color: '#FFF',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
  dine: {
    marginTop: '50px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '30px',
    },
  },
  reseveration: {
    fontSize: '1.9em',
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
  whiteBg: {
    [theme.breakpoints.down('sm')]: {
      height: '40vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '40vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '40vh',
    },
  },
}));

export default useStyles;

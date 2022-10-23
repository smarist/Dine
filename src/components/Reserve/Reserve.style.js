import { makeStyles } from '@material-ui/core';
import ImgBgD from '../../Images/ready-bg-desktop.jpg';
import ImgBgM from '../../Images/ready-bg-mobile.jpg';

const useStyles = makeStyles((theme) => ({
  section1: {
    height: '30vh',
    display: 'flex',
    color: '#FFFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${ImgBgM})`,
    },
    [theme.breakpoints.up('md')]: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${ImgBgD})`,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${ImgBgD})`,
    },
  },
  reseveration: {
    fontSize: '1.7em',
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

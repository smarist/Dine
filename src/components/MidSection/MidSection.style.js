import { makeStyles } from '@material-ui/core';
import Img1 from '../../Images/secondImg1.jpg';
import Img2 from '../../Images/ThirdSEc.jpg';

const useStyles = makeStyles((theme) => ({
  midBox: {
    [theme.breakpoints.up('lg')]: {
      // padding: '0px 60px',
    },
  },
  grid1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img1: {
    backgroundImage: `url(${Img1})`,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '360px',
      width: '330px',
      marginTop: '-40px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '360px',
      height: '330px',
      marginTop: '-40px',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '520px',
      width: '400px',
      marginTop: '-60px',
      marginLeft: '90px',
    },
  },
  grid2: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    },
    [theme.breakpoints.up('lg')]: {
    },
  },
  text1: {
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.2em',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.6em',
      width: '400px',
      alignItems: 'left',
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.2em',
      width: '400px',
    },
  },
  text2: {
    marginTop: '12px',
    [theme.breakpoints.up('md')]: {
      alignItems: 'left',
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      width: '410px',
      letterSpacing: '1.2px',
    },
  },
  img2: {
    backgroundImage: `url(${Img2})`,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '360px',
      width: '330px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '360px',
      height: '330px',
      marginBottom: '-40px',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '520px',
      width: '400px',
      marginBottom: '-40px',
    },
  },
  midBox2: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      marginTop: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '70px',
    },
  },
  gridd1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridd2: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
      textAlign: 'left',
      padding: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
      textAlign: 'left',
    },
  },
}));

export default useStyles;

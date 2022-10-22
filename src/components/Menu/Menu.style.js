import { makeStyles } from '@material-ui/core';
import SalmonD from '../../Images/salmonMobile.jpg';
import SalmonM from '../../Images/salmonD.jpg';
import ChocolateD from '../../Images/chocolateM.jpg';
import ChocolateM from '../../Images/chocolateD.jpg';
import BeefD from '../../Images/beefM.jpg';
import BeefM from '../../Images/beefD.jpg';

const useStyles = makeStyles((theme) => ({
  menuBox: {
    backgroundColor: '#111111',
    color: '#FFFF',
    padding: '40px',
    overflowY: 'hidden',
    // display: 'flex',
    '&::-webkit-scrollbar': {
      display: 'none !important',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
    },
  },
  grid1: {
    [theme.breakpoints.up('lg')]: {
      marginTop: '60px',
    },
  },
  box1: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '5px',
      marginBottom: '25px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '5px',
      marginBottom: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '5px',
      marginBottom: '25px',
    },
  },
  box11: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '5px',
      marginBottom: '25px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '5px',
      marginBottom: '25px',
      borderBottom: '1px solid #545454',
      borderTop: '1px solid #545454',
      padding: '20px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '5px',
      marginBottom: '25px',
      borderBottom: '1px solid #545454',
      borderTop: '1px solid #545454',
      padding: '20px 0px',
    },
  },
  box2: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'left',
    },
  },
  text1: {
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '2.9em',
      width: '450px',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.2em',
      width: '400px',
      alignItems: 'left',
      textAlign: 'left',
    },
  },
  text2: {
    marginTop: '12px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '60px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2em',
      alignItems: 'center',
      textAlign: 'center',
      width: '430px',
      marginBottom: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '410px',
      letterSpacing: '1.2px',
      alignItems: 'left',
      textAlign: 'left',
    },
  },
  salmonImg: {
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${SalmonM})`,
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '260px',
      width: '330px',
      marginTop: '20px',
      marginBottom: '60px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${SalmonM})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '300px',
      height: '150px',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${SalmonD})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '120px',
      width: '170px',
    },
  },
  beefImg: {
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${BeefM})`,
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '260px',
      width: '330px',
      marginTop: '20px',
      marginBottom: '60px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${BeefM})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '300px',
      height: '150px',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${BeefD})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '120px',
      width: '170px',
    },
  },
  chocolateImg: {
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${ChocolateM})`,
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '260px',
      width: '330px',
      marginTop: '20px',
      marginBottom: '60px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${ChocolateM})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '300px',
      height: '150px',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${ChocolateD})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '120px',
      width: '170px',
    },
  },
  imgText1: {
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'left',
      fontSize: '1.6em',
      width: '400px',
      alignItems: 'right',
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5em',
      // width: '400px',
    },
  },
  imgText2: {
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'left',
      textAlign: 'left',
      width: '400px',
    },
    [theme.breakpoints.up('lg')]: {
      // width: '410px',
      letterSpacing: '1.2px',
    },
  },
}));

export default useStyles;

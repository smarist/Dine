import { makeStyles } from '@material-ui/core';
// import HeaderImgMobile from '../../Images/hero-bg-mobile.jpg';
// import HeaderImgDesktop from '../../Images/hero-bg-desktop.jpg';
// import HeaderImgTablet from '../../Images/hero-bg-tablet.jpg';

const useStyles = makeStyles((theme) => ({
  headerBox: {
    display: 'flex',
    border: '2px solid red',
  },
  headerImg: {
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      // backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      // backgroundColor: green[500],
    },
  },
}));

export default useStyles;

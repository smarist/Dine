import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  eventTypeBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '335px',
      height: '335px',
    },
    [theme.breakpoints.up('md')]: {
      width: '600px !important',
      height: '350px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '500px',
      height: '460px',
    },
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  section: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      padding: '10px',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column-reverse',
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'column !important',
      width: '40%',
      justifyContent: 'left !important',
      alignItems: 'left !important',
      textAlign: 'left !important',
    },
  },
  section2: {
    // width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left !important',
      alignItems: 'left !important',
      textAlign: 'left !important',
    },
  },
  title: {
    fontSize: '1.6em !important',
    fontWeight: '600',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
    },
  },
  msg: {
    fontSize: '1.1em !important',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
    },
  },
  section3: {
    // width: '100%',
    display: 'flex',
    marginTop: '20px',
    gap: '20px',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'column',
      justifyContent: 'left',
      alignItems: 'left',
      textAlign: 'left',
    },
  },
  bookBtn: {
    marginTop: '30px',
    marginBottom: '30px',
    width: '220px',
    height: '50px',
    padding: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    backgroundColor: '#111111',
    cursor: 'pointer',
    '&:hover': {
      border: '3px solid #111111',
      color: '#111111',
      backgroundColor: '#FFF',
      width: '220px',
      height: '50px',
      padding: '4px',
    },
  },
  Line: {
    fontSize: '1.2em !important',
    cursor: 'pointer',
    color: '#979797',
    '&.ActiveLine': {
      fontWeight: '600',
      color: '#111111',
    },
    '&:hover': {
      color: '#111111',
    },
  },
}));

export default useStyles;

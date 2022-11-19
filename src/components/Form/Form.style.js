import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    color: '#000',
    height: '470px',
    zIndex: 1,
    padding: '30px',
  },
  errorMsg: {
    color: 'red',
  },
  textFieldBox: {
    marginTop: '15px',
    // width: '100%',
  },
  textField: {
    width: '100%',
  },
  dateBox: {
    marginTop: '30px !important',
    display: 'flex',
    gap: '24px',
    fontSize: '24px !important',
  },
  dateText: {
    fontSize: '18px !important',
    marginTop: '25px',
    flexBasis: '40%',
  },
  date: {
    display: 'flex',
    gap: '10px',
    flexBasis: '60%',
    position: 'relative',
  },
  amountBox: {
    display: 'flex',
    width: '98%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '25px',
  },
  calBtn: {
    fontSize: '2em',
    cursor: 'pointer',
  },
  amount: {
    fontSize: '1.5em',
  },
  bookBtn: {
    marginTop: '20px',
    width: '98%',
    height: '55px',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#111111',
    color: '#FFF',
    letterSpacing: '3px',
    fontSize: '1.1em',
    '&:hover': {
      backgroundColor: '#FFF',
      border: '3px solid #111111',
      color: '#111111',
    },
    '&:disabled': {
      backgroundColor: '#2222',
      color: '#FFF',
    },
  },
}));

export default useStyles;

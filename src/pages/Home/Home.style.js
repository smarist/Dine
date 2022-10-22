import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  body: {
    overflowY: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none !important',
    },
  },
}));

export default useStyles();

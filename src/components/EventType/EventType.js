import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './EventType.style';
import useEventType from './hooks/useEventType';

function EventType() {
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    onClick1,
    onClick2,
    onClick3,
    msg,
    title,
    img,
    eventType,
  } = useEventType();
  return (
    <Box className={classes.eventTypeBox}>
      <Box className={classes.box}>
        <img src={img} alt={title} className={classes.img} />
      </Box>
      <Box className={classes.section}>
        <Box className={classes.section2}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.msg}>{msg}</Typography>
          <Box
            className={classes.bookBtn}
            onClick={() => navigate('/Reservation')}
          >
            BOOK A TABLE
          </Box>
        </Box>
        <Box className={classes.section3}>
          <Typography
            onClick={onClick1}
            className={`${classes.Line} ${eventType === 'family' ? 'ActiveLine' : ''}`}
          >
            Family Gathering
          </Typography>
          <Typography
            onClick={onClick2}
            className={`${classes.Line} ${eventType === 'special' ? 'ActiveLine' : ''}`}
          >
            Special Events
          </Typography>
          <Typography
            onClick={onClick3}
            className={`${classes.Line} ${eventType === 'social' ? 'ActiveLine' : ''}`}
          >
            Social Events
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default EventType;

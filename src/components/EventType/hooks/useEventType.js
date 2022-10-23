import { useMemo, useState } from 'react';
import FamImg from '../../../Images/family-gathering-desktop.jpg';
import SocialImg from '../../../Images/social-events-desktop.jpg';
import SpecialImg from '../../../Images/special-events-desktop.jpg';

function useEventType() {
  const [eventType, setEventType] = useState('family');

  function onClick1() {
    setEventType('family');
  }

  function onClick2() {
    setEventType('special');
  }

  function onClick3() {
    setEventType('social');
  }

  const title = useMemo(() => {
    if (eventType === 'family') {
      return 'Family Gathering';
    } if (eventType === 'special') {
      return 'Special Events';
    }
    return 'Social Events';
  }, [eventType]);

  const img = useMemo(() => {
    if (eventType === 'family') {
      return FamImg;
    } if (eventType === 'special') {
      return SpecialImg;
    }
    return SocialImg;
  }, [eventType]);

  const msg = useMemo(() => {
    if (eventType === 'family') {
      return `We love catering for entire families. So please bring everyone along for a special meal with your loved ones.
      We’ll provide a memorable experience for all.`;
    } if (eventType === 'special') {
      return `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
      We’ll be sure to mark your special date with an unforgettable meal.`;
    }
    return `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. 
    We’ll work with you to make your event a hit with everyone.`;
  }, [eventType]);

  return {
    onClick1,
    onClick2,
    onClick3,
    msg,
    title,
    img,
    eventType,
  };
}

export default useEventType;

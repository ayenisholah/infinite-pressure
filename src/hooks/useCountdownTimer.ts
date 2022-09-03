import { useState, useEffect } from 'react';
import moment from 'moment';

type Items = {
  [key: string]: string;
};

const formatUnit = (unit: number) => {
  if (unit) {
    return `${unit < 10 ? `0${unit}` : unit}`;
  }
  return null;
};

const useCountdownTimer = (endTime: number): Items => {
  const [now, setNow] = useState<any>(moment());
  const [dateOject, setDateObject] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const then: any = moment.unix(endTime);
      const countdown = moment.duration(then - now);
      setDateObject({
        days: formatUnit(countdown.days()),
        hours: countdown.hours() < 1 ? '00' : formatUnit(countdown.hours()),
        minutes: countdown.minutes() < 1 ? '00' : formatUnit(countdown.minutes()),
        seconds: countdown.seconds() < 1 ? '00' : formatUnit(countdown.seconds()),
      });
      setNow(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, [now, setNow, endTime]);

  return dateOject;
};

export default useCountdownTimer;

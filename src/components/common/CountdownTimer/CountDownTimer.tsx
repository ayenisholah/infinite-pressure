import React, { FC, ReactNode } from 'react';
import { useCountdownTimer } from '../../../hooks';

interface CountDownTimerProps {
  endTime: number;
  className: string;
  seperatorClassName?: string;
  seperator?: ReactNode;
  showUnits?: boolean;
}

const getDate = (item: string, type?: string) => {
  if (parseInt(item) < 0) {
    return '0';
  }
  return `${item}${type}`;
};

const CountDownTimer: FC<CountDownTimerProps> = (props) => {
  const { endTime, className, seperatorClassName, seperator, showUnits } = props;
  const { days, hours, minutes, seconds } = useCountdownTimer(endTime);

  const isReady = seconds !== undefined;

  return (
    <div className={className}>
      {!isReady ? null : (
        <div className="flex">
          {!!days && (
            <>
              <span>{getDate(days, showUnits ? 'd' : '')}</span>
              <span className={seperatorClassName}>{seperator}</span>
            </>
          )}
          <span>{getDate(hours, showUnits ? 'm' : '')}</span>
          <span className={seperatorClassName}>{seperator}</span>
          <span>{getDate(minutes, showUnits ? 'h' : '')}</span>
          <span className={seperatorClassName}>{seperator}</span>
          <span>{getDate(seconds, showUnits ? 's' : '')}</span>
        </div>
      )}
    </div>
  );
};

export default CountDownTimer;

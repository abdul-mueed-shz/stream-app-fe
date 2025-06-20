'use client';

import {
  countdownItemStyle,
  countdownLabelStyle,
  countdownStyle,
  countdownValueStyle,
  subtitle,
} from './style.css';

const Countdown = ({ scheduledDate }) => {
  const timeLeft = {
    days: 30,
    hours: 24,
    minutes: 60,
    seconds: 37,
  };

  return (
    <>
      <p className={subtitle}>Scheduled live in</p>
      <div className={countdownStyle}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={value} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div key={unit} className={countdownItemStyle}>
              <div className={countdownValueStyle}>{value}</div>
            </div>
            <div className={countdownLabelStyle}>{unit}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countdown;

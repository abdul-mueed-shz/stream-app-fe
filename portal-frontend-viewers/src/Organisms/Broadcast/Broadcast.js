'use client';

import { containerStyle, titleStyle, firstColumn } from './style.css';

import Tab from '../../Atoms/Tab';
import Chapters from '../../Atoms/Chapters';
import Description from '../../Atoms/Description';
import Countdown from '../../Atoms/Countdown';
import BroadCastingVideo from '../../Molecules/BroadCastingVideo';
import { images } from '../../config';

const Broadcast = ({ title, scheduledDate, showCountDown = false }) => {
  return (
    <div className={containerStyle}>
      <div className={firstColumn}>
        {showCountDown ? <h1 className={titleStyle}>{title}</h1> : null}
        {showCountDown ? <Countdown scheduledDate={scheduledDate} /> : <BroadCastingVideo />}
      </div>

      <div>
        <Tab chapters={<Chapters />} description={<Description />} />
      </div>
    </div>
  );
};

export default Broadcast;

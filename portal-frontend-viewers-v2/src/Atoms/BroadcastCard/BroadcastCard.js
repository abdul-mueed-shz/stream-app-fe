import React from 'react';
import { card, image, content, titleStyle, dateStyle, cardImage } from './style.css';
import { images } from '../../config';
import Image from 'next/image';

const BroadcastCard = ({ title, date, showPrevious = false }) => {
  return (
    <div className={card}>
      <Image src={images.checkBox} width={240} height={240} className={cardImage} alt='cardImage' />
      <div className={content}>
        <h3 className={titleStyle}>{title}</h3>
        {showPrevious ? (
          <p className={dateStyle}>1 Hour go</p>
        ) : (
          <p className={dateStyle}>{date}</p>
        )}
      </div>
    </div>
  );
};

export default BroadcastCard;

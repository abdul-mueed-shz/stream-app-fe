import React from 'react';
import {
  container,
  title,
  description,
  button,
  pageTitle,
  cardData,
  liveImage,
  liveText,
  liveContainer,
  liveImageStyles,
  LeftSide,
  mobileContainer,
  titleMobileStyles,
} from './style.css';
import { images } from '../../config';
import Image from 'next/image';

const LiveCard = () => {
  return (
    <div className={container}>
      <div className={LeftSide}>
        <Image src={images.checkBox} alt='dummy' width={240} height={240} className={liveImage} />
        <div className={cardData}>
          <p className={title}>Live Title</p>
          <p className={description}>
            Lorem Ipsum is simply dummy text dummy text lorem Ipsum is simply dummy text dummy text
            lorem Ipsum is simply dummy text dummy text lorem Ipsum is simply dummy text dummy text.
          </p>
          <div className={liveContainer}>
            <Image
              src={images?.liveStream}
              className={liveImageStyles}
              height={37}
              width={37}
              alt='live-stream'
            />
            <p className={liveText}>LIVE</p>
          </div>
        </div>
      </div>
      <button className={button}>Watch live</button>
    </div>
  );
};

const MobileLiveCard = () => {
  return (
    <div className={mobileContainer}>
      <Image
        style={{ marginLeft: '10px' }}
        src={images.checkBox}
        alt='dummy'
        width={240}
        height={240}
        className={liveImage}
      />
      <div
        style={{
          padding: '0 15px',
        }}
      >
        <h3 className={titleMobileStyles}>Live</h3>
        <div style={{ marginTop: '10px' }} className={liveContainer}>
          <Image
            src={images?.liveStream}
            className={liveImageStyles}
            height={37}
            width={37}
            alt='live-stream'
          />
          <p className={liveText}>LIVE</p>
        </div>
      </div>
    </div>
  );
};

const LiveBroadcast = () => {
  return (
    <div>
      <p className={pageTitle}>Live</p>
      <LiveCard />
      <MobileLiveCard />
    </div>
  );
};

export default LiveBroadcast;

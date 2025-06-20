import {
  playerContainer,
  videoPlayer,
  controls,
  timeDisplay,
  progress,
  progressBar,
  title,
  date,
  contentContainer,
  sectionTitle,
  description,
  iframe,
  currentPlayer,
  currentSpeaker,
} from './style.css';

import { Play, RotateCcw, Volume2, Settings, Maximize } from 'lucide-react';

import Speaker from '../../Atoms/Speaker';

const BroadcastingVideo = () => {
  return (
    <div className={playerContainer}>
      <div className={videoPlayer}>
        <iframe
          src='https://www.youtube.com/embed/GbYamqzXRqA'
          title='SINNER vs MACHAC • ATP Shanghai 2024 SF • LIVE Tennis Watchalong Stream'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
          className={iframe}
        />
        {/* <div className={timeDisplay}>05:42</div>
        <div className={controls}>
          <Play size={20} />
          <RotateCcw size={20} />
          <Volume2 size={20} />
          <div style={{ flex: 1 }} />
          <Settings size={20} />
          <Maximize size={20} />
        </div>
        <div className={progressBar}>
          <div className={progress} />
        </div> */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className={title}>Title of Broadcast</h1>
        <div className={date}>YY/MM/DD</div>
      </div>
      <p className={currentSpeaker}>Current Speakers</p>
      <Speaker />
      <div className={contentContainer}>
        <h2 className={sectionTitle}>02 - What is product design?</h2>
        <p className={description}>
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    </div>
  );
};
export default BroadcastingVideo;

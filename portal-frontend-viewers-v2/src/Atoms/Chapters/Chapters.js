'use client';

import Accordion from '../Accordion';
import { images } from '../../config';
import { scrollbar_custom } from './style.css';

const Chapters = () => {
  const video = {
    title: 'What is product duration?',
    duration: '(13:09)',
    speakers: [
      { name: 'Hello', image: images?.avatar },
      { name: 'Hello', image: images?.avatar },
      { name: 'Hello', image: images?.avatar },
      { name: 'Hello', image: images?.avatar },
    ],
  };

  return (
    <div style={{ height: '700px', overflowY: 'scroll' }} className={scrollbar_custom}>
      {Array(20)
        .fill(video)
        .map((video, index) => (
          <Accordion
            key={index}
            videoNo={index}
            video={video}
            showBottomBorder={Array(10)?.length - 1 != index}
          />
        ))}
    </div>
  );
};

export default Chapters;

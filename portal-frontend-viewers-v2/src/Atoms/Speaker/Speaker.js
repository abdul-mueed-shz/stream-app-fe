import { speaker, speakerInfo, speakersContainer, speakerName, speakerRole } from './style.css';

import { images } from '../../config';
import Image from 'next/image';

const Speaker = () => {
  return (
    <div className={speakersContainer}>
      <div className={speaker}>
        <Image
          src={images?.avatar}
          style={{ objectFit: 'contain' }}
          width={40}
          height={40}
          alt='avatar'
        />

        <div className={speakerInfo}>
          <span className={speakerName}>Speaker Name</span>
          <span className={speakerRole}>Host</span>
        </div>
      </div>
    </div>
  );
};

export default Speaker;

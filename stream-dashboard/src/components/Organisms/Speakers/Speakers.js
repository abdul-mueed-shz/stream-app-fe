'use client';

import SpeakerCard from '@/components/Atoms/Cards/SpeakerCard';
import { cardContainer } from './style.css';
import Pagination from '@/components/Atoms/Pagination';
import SpeakerHeader from '@/components/Atoms/SpeakerHeader';
import { AddSpeakerModal } from '@/components/Molecules/Popups';

const Speakers = () => {
  return (
    <div>
      <SpeakerHeader />
      <div style={{ marginTop: '50px', padding: '0 30px' }}>
        <div className={cardContainer}>
          {Array(15)
            .fill(0)
            .map(() => (
              <SpeakerCard />
            ))}
        </div>
        <div style={{ margin: '40px 0px' }}>
          <Pagination label={'Speaker'} />
        </div>
      </div>
    </div>
  );
};

export default Speakers;

import {
  speakerCard,
  speakerTitle,
  speakerName,
  buttonContainer,
  buttonStyles,
  checkBox,
  avatar,
} from './style.css';

import { AddSpeakerModal } from '@/components/Molecules/Popups';
import Checkbox from '../../Checkbox';
import { UserRound, Pencil, X } from 'lucide-react';
import { useState } from 'react';

const SpeakerCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={speakerCard}>
      <div className={checkBox}>
        <Checkbox />
      </div>

      <div className={avatar}>
        <UserRound color='black' size={50} />
      </div>
      <p className={speakerTitle}>Speaker Name</p>
      <p className={speakerName}>Insert your title here</p>
      <div className={buttonContainer}>
        <div
          className={buttonStyles}
          style={{ backgroundColor: 'white' }}
          onClick={() => setIsOpen(true)}
        >
          <Pencil size={20} color='black' />
        </div>
        <div className={buttonStyles} style={{ backgroundColor: '#DC2626', marginLeft: '20px' }}>
          <X color='white' size={20} />
        </div>
      </div>

      <AddSpeakerModal isOpen={isOpen} onClose={setIsOpen} mode={'Edit'} />
    </div>
  );
};
export default SpeakerCard;

'use client';

import { AddSpeakerModal } from '@/components/Molecules/Popups';
import { images } from '@/config';
import * as styles from './style.css';
import Image from 'next/image';
import SearchBar from '../SearchBox';
import Checkbox from '../Checkbox';
import { useState } from 'react';

const AddNew = ({ setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(true)}
      style={{
        height: '42px',
        width: '166px',
        backgroundColor: '#181818',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20px',
        cursor: 'pointer',
      }}
    >
      <Image src={images.plus} height={13} width={13} alt='plus' />
      <p style={{ fontSize: '13px', fontWeight: 600, marginLeft: '5px' }}>Add New Speaker</p>
    </div>
  );
};

const SpeakerHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <AddSpeakerModal isOpen={isOpen} onClose={setIsOpen} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox />
        <p style={{ marginLeft: '10px', marginTop: '2px', fontSize: '16px', fontWeight: 500 }}>Select All</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SearchBar />
        <AddNew setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default SpeakerHeader;

// components/AddSpeakerModal.js
import React from 'react';
import Modal from './Modal';
import * as styles from './style.css';
import ProfileImage from '@/components/Atoms/Inputs/ProfileImage';
import ProfilePictureEditor from '@/components/Atoms/ProfilePicture';

const AddSpeakerModal = ({ isOpen, onClose, mode = 'Add' }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 style={{ textAlign: 'center' }}>
        {mode} {mode == 'Add' && 'New'} Speaker
      </h2>
      <ProfilePictureEditor mode={mode} />
      <form className={styles.formStyle}>
        <div className={styles.formContainer}>
          <label htmlFor='name' className={styles.label}>
            Name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Type the name of the speaker'
            className={styles.inputStyle}
          />
        </div>
        <div className={styles.formContainer}>
          <label htmlFor='title' className={styles.label}>
            Title
          </label>
          <input
            id='title'
            type='text'
            placeholder='e.g., Marketing Director'
            className={styles.inputStyle}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
          <button type='button' onClick={() => onClose(false)} className={styles.plainButton}>
            Cancel
          </button>
          <button type='submit' className={styles.buttonStyle}>
            {mode == 'Add' ? 'Create' : 'Update'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddSpeakerModal;

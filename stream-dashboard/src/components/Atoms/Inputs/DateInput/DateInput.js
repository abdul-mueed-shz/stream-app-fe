'use client';

import Flatpickr from 'react-flatpickr';

import * as styles from './style.css';
import { Calendar } from 'lucide-react';

const DateInput = ({ label, required }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label className={styles.labelStyle}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.inputContainer}>
        {/* <div className={styles.calendarIcon}>
          <Calendar size={20} />
        </div> */}

        <Flatpickr
          options={{
            dateFormat: 'd/m/y',
          }}
          placeholder='Pick a date'
          className={styles.inputField}
        />
      </div>
    </div>
  );
};

export default DateInput;

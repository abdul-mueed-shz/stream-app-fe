import { useState } from 'react';
import TimePicker from 'react-time-picker';
import * as styles from './style.css';
import { Clock } from 'lucide-react';

const CustomTimePicker = ({ label, required }) => {
  const [value, onChange] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label className={styles.labelStyle}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.inputContainer}>
        {/* <div className={styles.clockIcon}>
          <Clock color='white' size={20} />
        </div> */}
        <TimePicker
          disableClock
          clearIcon={false}
          clockIcon={null}
          onChange={onChange}
          value={value}
          className={styles.inputField}
        />
      </div>
    </div>
  );
};
export default CustomTimePicker;

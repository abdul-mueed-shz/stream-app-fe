'use client';

import React, { useState } from 'react';
import * as styles from './style.css';

const Checkbox = ({ size = '15px' }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label
      style={{ width: size, height: size }}
      className={`${styles.checkboxContainer} ${isChecked ? styles.checkboxChecked : ''}`}
      onClick={handleToggle}
    >
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleToggle}
        className={styles.hiddenCheckbox}
      />
      <span className={`${styles.tickMark} ${isChecked ? styles.tickVisible : ''}`} />
    </label>
  );
};

export default Checkbox;

import React from 'react';
import { container, button, active } from './styles.css';

const Pagination = () => {
  return (
    <div className={container}>
      <button className={button}>&lt;</button>
      <button className={`${button} ${active}`}>1</button>
      <button className={button}>2</button>
      <button className={button}>3</button>
      <button className={button}>4</button>
      <button className={button}>5</button>
      <span>...</span>
      <button className={button}>15</button>
      <button className={button}>&gt;</button>
    </div>
  );
};

export default Pagination;

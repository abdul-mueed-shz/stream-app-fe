import React from 'react';
import BroadcastCard from '../../Atoms/BroadcastCard';
import Pagination from '../../Atoms/Pagination';
import { container, titleStyle, list } from './style.css';

const BroadcastList = ({ title, broadcasts, showPrevious = false }) => {
  return (
    <section className={container}>
      <h2 className={titleStyle}>{title}</h2>
      <div className={list}>
        {broadcasts.map((broadcast) => (
          <BroadcastCard key={broadcast.id} {...broadcast} showPrevious={showPrevious} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default BroadcastList;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  tabContainerStyle,
  tabContentStyle,
  tabHeaderStyle,
  tabStyle,
  activeTabStyle,
} from './style.css';

const AnimatedTabs = ({ chapters, description }) => {
  const [activeTab, setActiveTab] = useState('CHAPTERS');

  return (
    <div className={tabContainerStyle}>
      <div className={tabHeaderStyle}>
        {['CHAPTERS', 'DESCRIPTION'].map((tab) => (
          <div
            key={tab}
            className={`${tabStyle} ${activeTab === tab ? activeTabStyle : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab ? (
              <motion.div
                layoutId='active-tab'
                style={{
                  position: 'absolute',
                  bottom: '-1px',
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                }}
                initial={true}
              />
            ) : null}
          </div>
        ))}
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={tabContentStyle}
        >
          {activeTab === 'CHAPTERS' ? chapters : description}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTabs;

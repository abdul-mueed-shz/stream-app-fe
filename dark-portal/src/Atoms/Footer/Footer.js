import React from 'react';
import { images } from '../../config';
import Image from 'next/image';

const data = [
  {
    icon: images?.pin,
    text: '2715 Ash Dr. San Jose, South Dakota 83475',
  },
  {
    icon: images.phone,
    text: '(219) 555-0114',
  },

  {
    icon: images.mail,
    text: 'info@screeno.com',
  },
];

import {
  footerStyle,
  footerContainer,
  divider,
  website,
  watermark,
  iconContainer,
  textStyle,
  copyRightContainer,
  cc,
  socialmedia,
  mobileSocialMedia,
} from './style.css';

const Footer = () => (
  <footer className={footerStyle}>
    <div className={footerContainer}>
      <div className={mobileSocialMedia}>
        <Image src={images.instagram} width={24} height={24} alt={'pin'} />
        <Image
          src={images.facebook}
          width={24}
          height={24}
          alt={'pin'}
          style={{ marginLeft: '20px' }}
        />
      </div>
      <div>
        {data.map(({ text, icon }) => {
          return (
            <div className={iconContainer}>
              <Image src={icon} width={20} height={20} alt={'pin'} />
              <p className={textStyle}>{text}</p>
            </div>
          );
        })}
      </div>

      <div>
        <p className={website}>Official Website</p>
        <p className={watermark}>Watermark</p>
      </div>
    </div>
    <div className={divider}></div>
    <div className={copyRightContainer}>
      <p className={cc}>©2024 Screens, All rights reserved</p>

      <div className={socialmedia}>
        <Image src={images.instagram} width={24} height={24} alt={'pin'} />
        <Image src={images.facebook} width={24} height={24} alt={'pin'} />
      </div>
    </div>
  </footer>
);

export default Footer;

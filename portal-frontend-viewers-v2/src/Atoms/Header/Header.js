'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useCycle } from 'framer-motion';
import {
  header,
  logo,
  navItem,
  activeNavItem,
  rightSection,
  navbar,
  logoText,
  waterMark,
  separator,
  mobileMenuLink,
  menuContainer,
  languageSection,
  languageDivider,
  activeMobileMenuLink,
  burger,
  animatedMobileMenu,
} from './style.css';
import { images } from '../../config';
import LanguageToggler from '../LanguageToggler';

// Helper hook to get dimensions
const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    diagonal: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        // Calculate diagonal using Pythagorean theorem and add extra padding
        const diagonal = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2)) + 100;

        setDimensions({
          height: windowHeight,
          width: windowWidth,
          diagonal: diagonal,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [ref]);

  return dimensions;
};

// Animation variants
const sidebar = {
  open: ({ width, height, diagonal } = { width: 1920, height: 1080, diagonal: 2500 }) => ({
    clipPath: `circle(${diagonal}px at calc(100% - 40px) 40px)`,
    display: 'block',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at calc(100% - 20px) 20px)',
    display: 'none',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);

// MenuToggle Component
const MenuToggle = ({ toggle, isOpen }) => (
  <div onClick={toggle} className={burger}>
    {/* <Image src={images.burger_menu} height={24} width={24} alt='menu-icon' /> */}
    <svg width='23' height='23' viewBox='0 0 23 23'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
      />
    </svg>
  </div>
);

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const currentPage = usePathname();

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header className={header}>
      <div className={logo}>
        <Image src={images.logo_light} alt='logo' height={35} width={35} />
        <p className={logoText}>LOGO</p>
      </div>

      {/* Desktop Nav */}
      <nav className={navbar}>
        <Link href='/' className={currentPage === '/' ? activeNavItem : navItem}>
          Home
        </Link>
        <Link href='/live' className={currentPage === '/live' ? activeNavItem : navItem}>
          Live
        </Link>
        <Link
          href='/upcoming-broadcast'
          className={currentPage === '/upcoming-broadcast' ? activeNavItem : navItem}
        >
          Upcoming Broadcasts
        </Link>
        <Link
          href='/previous-broadcast'
          className={currentPage === '/previous-broadcast' ? activeNavItem : navItem}
        >
          Previous Broadcasts
        </Link>
      </nav>

      <div className={rightSection}>
        <p className={waterMark}>Watermark</p>
        <div className={separator}></div>
        <LanguageToggler />
      </div>

      {/* Mobile Menu with Circular Animation */}

      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        style={{ display: isOpen ? 'block' : 'none' }}
        className={animatedMobileMenu}
      >
        <motion.div
          variants={sidebar}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            background: 'white',
            zIndex: 100,
            display: isOpen ? 'block' : 'none',
          }}
        />

        <motion.div
          className={menuContainer}
          variants={menuVariants}
          style={{
            padding: '100px 30px',
            position: 'relative',
            zIndex: 101,
          }}
        >
          <motion.div className={languageSection} variants={menuItemVariants}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={images.american_flag} alt='american-flag' height={28} width={28} />
              <p style={{ marginLeft: '10px', fontWeight: 600 }}>EN</p>
            </div>
            <div className={languageDivider}></div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={images.sweden_flag} alt='sweden-flag' height={28} width={28} />
              <p style={{ marginLeft: '10px', color: 'grey' }}>SV</p>
            </div>
          </motion.div>

          <motion.div
            variants={menuItemVariants}
            className={currentPage === '/' ? activeMobileMenuLink : mobileMenuLink}
          >
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              href='/'
              onClick={() => toggleOpen()}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            className={currentPage === '/live' ? activeMobileMenuLink : mobileMenuLink}
          >
            <Link
              href='/live'
              style={{ textDecoration: 'none', color: 'black' }}
              // className={currentPage === '/live' ? activeMobileMenuLink : mobileMenuLink}
              onClick={() => toggleOpen()}
            >
              Live
            </Link>
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            className={
              currentPage === '/upcoming-broadcast' ? activeMobileMenuLink : mobileMenuLink
            }
          >
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              href='/upcoming-broadcast'
              onClick={() => toggleOpen()}
            >
              Upcoming Broadcasts
            </Link>
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            className={
              currentPage === '/previous-broadcast' ? activeMobileMenuLink : mobileMenuLink
            }
          >
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              href='/previous-broadcast'
              onClick={() => toggleOpen()}
            >
              Previous Broadcasts
            </Link>
          </motion.div>
        </motion.div>
      </motion.nav>

      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
    </header>
  );
};

export default Header;

import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 1rem 1rem 1rem',
  // borderBottom: '1px solid #ddd',
  backgroundColor: 'rgba(33, 33, 33, 1)',

  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '1rem 2rem 1rem 3rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '1rem 1rem 1rem 1rem',
    },
  },
});

export const logo = style({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
});

export const waterMark = style({
  fontSize: '22px',
  fontWeight: 700,
});

export const logoText = style({
  marginLeft: '20px',
  fontSize: '22px',
});

export const navbar = style({
  border: '1px solid #EAEAEA',
  borderRadius: '30px',
  padding: '10px 0px',
  display: 'none',
  width: '600px',
  textAlign: 'center',
  '@media': {
    'screen and (min-width: 1080px)': {
      display: 'block',
    },
  },
});

export const navItem = style({
  // display: 'inline-block',
  padding: '0rem 1rem',
  textDecoration: 'none',
  color: 'rgba(255, 255, 255, 0.6)',
  position: 'relative',
  ':hover': {
    color: 'white',
  },
});

export const activeNavItem = style([
  navItem,
  {
    color: 'white',
    fontWeight: 'bold',
  },
]);

export const rightSection = style({
  display: 'none',
  alignItems: 'center',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 1080px)': {
      display: 'flex',
    },
  },
});

export const separator = style({
  width: '1px',
  backgroundColor: 'rgba(217, 217, 217, 1)',
  height: '40px',
});

export const burger = style({
  zIndex: 5000,
  '@media': {
    'screen and (min-width: 1080px)': {
      display: 'none',
    },
  },
});

export const mobileMenu = style({
  display: 'none', // Initially hidden
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'white',
  zIndex: '1000',
  transition: 'transform 0.3s ease-in-out', // Smooth slide
  transform: 'translateX(100%)', // Initially off-screen

  '@media': {
    'screen and (min-width: 1080px)': {
      display: 'none',
    },
  },
});

export const mobileMenuOpen = style({
  display: 'block',
  transform: 'translateX(0)', // Slide in when open
  '@media': {
    'screen and (min-width: 1080px)': {
      display: 'none',
    },
  },
});

// Style for the menu container (to center content)
export const menuContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  marginTop: '80px',
});

// Style for the language section
export const languageSection = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '40px', // Space below language section
});

export const languageDivider = style({
  width: '1px',
  height: '40px',
  backgroundColor: '#ccc',
  margin: '0 30px',
});

// Style for menu links
export const mobileMenuLink = style({
  width: '80%',
  height: '42px',
  fontSize: '18px',
  textAlign: 'center',
  textDecoration: 'none',
  border: '1px solid #ddd',
  borderRadius: '20px',
  margin: '10px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease-in-out', // Smooth hover effect
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
  '@media': {
    '(max-width: 1024px)': {
      fontSize: '12px',
    },
  },
});

export const activeMobileMenuLink = style([
  mobileMenuLink,
  {
    fontWeight: 'bold',
  },
]);

export const overlay = style({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
  zIndex: '900', // Below the menu
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
});

export const burgerMenu = style({
  position: 'absolute',
  right: 32,
  top: 21,
  '@media': {
    '(max-width: 786px)': {
      right: 16,
      top: 22,
    },
  },
});

export const animatedMobileMenu = style({
  position: 'fixed',
  display: 'block',
  top: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  zIndex: 100,
  '@media': {
    'screen and (min-width: 1080px)': {
      display: 'none',
    },
  },
});

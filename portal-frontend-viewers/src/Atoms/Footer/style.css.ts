import { style } from '@vanilla-extract/css';
export const footerStyle = style({
  backgroundColor: 'rgba(0, 0, 0, 1)',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const divider = style({
  width: '100%',
  height: '0.5px',
  background: 'rgba(201, 201, 201, 0.33)',
  margin: '20px 0px 0px 0px',
});

export const footerContainer = style({
  maxWidth: '72rem',
  minWidth: '72rem',
  padding: '50px 0',

  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    '(max-width: 1024px)': {
      minWidth: '50rem',
    },
    '(max-width: 768px)': {
      flexDirection: 'column-reverse',
      minWidth: 'unset',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export const website = style({
  fontSize: '26px',
  marginTop: '25px',
  textAlign: 'center',
  fontWeight: 600,
  color: 'white',
  position: 'relative',
  marginBottom: '10px', // Adjust the space between the text and the underline
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px', // Adjusts the distance between the line and text
    left: 0,
    width: '100%',
    height: '0.3px', // Height of the line
    backgroundColor: 'rgba(201, 201, 201, 0.33)', // Color of the line
  },
});

export const watermark = style({
  fontSize: '22px',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 1)',
  textAlign: 'center',
  marginTop: '50px',
});

export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  margin: '30px 0',
  '@media': {
    '(max-width: 768px)': {
      justifyContent: 'center',
    },
  },
});

export const textStyle = style({
  color: 'white',
  marginLeft: '10px',
  width: '200px',
  fontSize: '16px',
  fontWeight: 400,
});

export const copyRightContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '20px 0px',
});

export const cc = style({
  marginLeft: '40px',
  fontSize: '14px',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 0.66)',
});

export const socialmedia = style({
  width: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: '40px',

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const mobileSocialMedia = style({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  width: '225px',

  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
    },
  },
});

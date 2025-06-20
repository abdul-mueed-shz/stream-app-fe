import { style } from '@vanilla-extract/css';

export const pageTitle = style({
  fontWeight: 700,
  fontSize: '35px',
  marginBottom: '30px',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '20px',
    },
  },
});

export const container = style({
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25), 0px -4px 8px rgba(0, 0, 0, 0.1)',
  alignItems: 'center',
  height: '266.27px',
  '@media': {
    '(max-width: 768px)': {
      height: '112px',
      display: 'none',
    },
  },
});

export const LeftSide = style({
  flex: 1,
  height: '100%',
  display: 'flex',
  justifyContent: 'unset',
  alignContent: 'center',
  alignItems: 'center',
  padding: '20px',
  '@media': {
    '(max-width: 768px)': {
      padding: '10px',
    },
  },
});

export const cardData = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  rowGap: '65px',
  marginLeft: '10px',

  '@media': {
    'screen and (min-width: 1024px)': {
      marginLeft: '50px',
      rowGap: '15px',
    },
  },
});

export const title = style({
  fontSize: '28px',
  fontWeight: 500,
  // marginTop: '20px',
  '@media': {
    '(max-width: 768px)': {
      // marginTop: '5px',
      fontSize: '12px',
      color: 'rgba(108, 108, 108, 1)',
      // marginLeft: '10px',
    },
  },
});

export const description = style({
  width: '279px',
  fontWeight: 400,
  // marginTop: '12px',
  lineHeight: '23.8px',
  color: 'rgba(108, 108, 108, 1)',
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const button = style({
  backgroundColor: '#000',
  display: 'none',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  height: '55px',
  width: '158px',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '40px',
  fontSize: '22px',
  fontWeight: 400,
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
  '@media': {
    'screen and (min-width: 786px)': {
      display: 'flex',
    },
  },
  selectors: {
    '&:hover': {
      backgroundColor: 'linear-gradient(90deg, #ff7e5f, #feb47b)', // gradient effect
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // shadow effect
      transform: 'scale(1.05)', // subtle scale effect
    },
    '&:active': {
      transform: 'scale(1.02)', // slightly reduce scale on click
    },
  },
});

export const liveImage = style({
  '@media': {
    '(max-width: 768px)': {
      height: '100px',
      width: '100px',
    },
  },
});

export const liveText = style({
  color: 'rgba(220, 38, 38, 1)',
  fontWeight: 400,
  fontSize: '20px',
  marginLeft: '10px',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '12px',
      fontWeight: 400,
      marginLeft: '2px',
    },
  },
});

export const liveImageStyles = style({
  '@media': {
    '(max-width: 768px)': {
      height: '17px',
      width: '17px',
    },
  },
});

export const liveContainer = style({
  display: 'flex',
  alignItems: 'center',
  // marginTop: '20px',
  '@media': {
    '(max-width: 768px)': {
      // marginTop: '70px',
    },
  },
});

// mobile card styles

export const mobileContainer = style({
  borderRadius: '8px',
  display: 'none',
  overflow: 'hidden',
  marginBottom: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25), 0px -4px 8px rgba(0, 0, 0, 0.1)',
  alignItems: 'center',
  height: '266.27px',
  '@media': {
    '(max-width: 768px)': {
      height: '112px',
      display: 'flex',
    },
  },
});


export const titleMobileStyles = style({
  fontSize: '14px',
  color: 'rgba(108, 108, 108, 1)',
  fontWeight: 500,
  '@media': {
    '(max-width: 768px)': {
      marginBottom: '40px',
    },
  },
});
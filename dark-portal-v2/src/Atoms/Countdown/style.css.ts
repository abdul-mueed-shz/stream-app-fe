import { style } from '@vanilla-extract/css';

export const countdownStyle = style({
  marginTop: '40px',
  display: 'flex',
  '@media': {
    '(max-width: 768px)': {
      marginBottom: '40px',
    },
  },
});

export const countdownItemStyle = style({
  backgroundColor: 'white',
  color: 'black',
  width: '102.18px',
  height: '99.66px',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    '(max-width: 768px)': {
      width: '60.96px',
      height: '60.96px',
    },
  },
});

export const countdownValueStyle = style({
  fontSize: '38px',
  fontWeight: '600',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '22px',
    },
  },
});

export const countdownLabelStyle = style({
  fontSize: '22px',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: '15px',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '14px',
    },
  },
});

export const subtitle = style({
  textAlign: 'center',
  marginTop: '90px',
  fontSize: '25px',
  fontWeight: '400',
  '@media': {
    '(max-width: 768px)': {
      marginTop: '30px',
    },
  },
});

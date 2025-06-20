import { style } from '@vanilla-extract/css';

export const card = style({
  background: 'rgba(33, 33, 33, 1)',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  overflow: 'hidden',
  height: '337px',
  border: '0.3px solid rgba(0, 0, 0, 0.77)',
  boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
  '@media': {
    '(max-width: 768px)': {
      height: '120px',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  ':hover': {
    transform: 'scale(1.02)', // slightly reduce scale on click
    background: '#272727',
  },
});

export const cardImage = style({
  height: '240px',
  width: '100%',
  padding: '10px 0px',

  '@media': {
    '(max-width: 768px)': {
      height: '105px',
      width: 'unset',
      padding: '10px',
    },
  },
});

export const content = style({
  padding: '0 15px',
  '@media': {
    '(max-width: 768px)': {
      padding: '0 5px',
    },
  },
});

export const titleStyle = style({
  fontSize: '14px',
  color: 'rgba(181, 181, 181, 1)',
  fontWeight: 500,
  '@media': {
    '(max-width: 768px)': {
      marginBottom: '40px',
    },
  },
});

export const dateStyle = style({
  fontSize: '12px',
  color: 'rgba(255, 255, 255, 0.77)',
  marginTop: '10px',
  fontWeight: 400,
});

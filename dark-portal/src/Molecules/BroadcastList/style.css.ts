import { style } from '@vanilla-extract/css';

export const container = style({
  marginBottom: '40px',
});

export const titleStyle = style({
  fontSize: '35px',
  fontWeight: 700,
  marginBottom: '30px',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '20px',
    },
  },
});

export const list = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

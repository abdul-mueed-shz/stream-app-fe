import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  height: '100%',
  maxWidth: '80%',
  margin: '0 auto',
  marginBottom: '40px',
  padding: '20px',
  gap: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: '0px 10px',
      marginTop: '20px',
      maxWidth: '100%',
    },
  },
});

export const firstColumn = style({
  gridColumn: 'span 2',
});

export const titleStyle = style({
  fontSize: '33px',
  fontWeight: '700',
});

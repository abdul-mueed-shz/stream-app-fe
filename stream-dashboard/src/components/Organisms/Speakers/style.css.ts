import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  rowGap: '30px',
  columnGap: '15px',
});

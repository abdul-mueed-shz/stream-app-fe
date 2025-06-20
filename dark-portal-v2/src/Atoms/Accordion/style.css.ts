import { style } from '@vanilla-extract/css';

export const accordionStyles = style({
  height: '63px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 20px',
  ':hover': {
    background: 'rgba(216, 216, 216, 1) !importan',
  },
});

export const openAccordionStyles = style({
  borderBottom: '1px solid rgba(181, 181, 181, 0.33)',
  height: '45px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 20px',
  ':hover': { backgroundColor: '#6C6C6C' },
  // background: 'rgba(246, 246, 246, 1)',
});

export const tvContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const videoTitle = style({
  fontWeight: 400,
  fontSize: '16px',
  marginLeft: '5px',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '12px',
    },
  },
});

export const contentContainer = style({});

export const duration = style({
  fontWeight: 400,
  fontSize: '12px',
  marginTop: '5px',
});

export const pointerCursor = style({
  cursor: 'pointer',
});

export const speakerAccordionStyle = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  
});

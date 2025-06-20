import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

export const button = style({
  padding: '5px 10px',
  margin: '0 5px',
  border: 'none',
  background: 'black',
  color: 'white',
  cursor: 'pointer',

  ':hover': {
    background: 'white',
    color: 'black',
  },
});

export const active = style({
  background: 'white',
  color: 'black',
  borderRadius: '50px',

  ':hover': {
    background: 'white',
  },
});

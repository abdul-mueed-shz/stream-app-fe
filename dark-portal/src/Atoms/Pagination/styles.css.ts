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
  background: '#0F0F0F',
  color: 'white',
  cursor: 'pointer',

  ':hover': {
    background: 'white',
    color: '#0F0F0F',
    borderRadius: '50px',
  },
});

export const active = style({
  background: 'white',
  color: '#0F0F0F',
  borderRadius: '50px',

  ':hover': {
    background: 'white',
  },
});

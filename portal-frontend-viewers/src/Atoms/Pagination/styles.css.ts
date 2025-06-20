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
  background: 'white',
  cursor: 'pointer',

  ':hover': {
    background: '#f0f0f0',
  },
});

export const active = style({
  background: '#000',
  color: '#fff',
  borderRadius: '50px',

  ':hover': {
    background: '#000',
  },
});

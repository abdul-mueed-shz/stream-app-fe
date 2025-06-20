import { style } from '@vanilla-extract/css';

export const imgContainer = style({
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const avatar = style({
  height: '150px',
  width: '150px',
  background: 'white',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const plusButton = style({
  position: 'absolute',
  bottom: 10,
  right: 0,
  background: 'black',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});

export const btnDanger = style({
  color: 'rgba(220, 38, 38, 1)',
  fontSize: '18px',
  fontWeight: 600,
});

export const btn = style({
  color: 'white',
  fontSize: '18px',
  fontWeight: 600,
});


export const btnContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  marginTop: '30px',
});
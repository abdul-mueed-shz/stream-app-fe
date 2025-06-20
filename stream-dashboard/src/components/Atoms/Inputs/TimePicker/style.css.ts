import { style } from '@vanilla-extract/css';

export const labelStyle = style({
  color: 'white',
  fontWeight: 600,
  fontSize: '18px',
});

export const required = style({
  color: 'red',
  marginLeft: '4px',
});

export const inputContainer = style({
  backgroundColor: 'rgba(33, 33, 33, 1)',
  borderRadius: '16px',
  padding: '10px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  marginTop: '15px',
});

export const calendarIcon = style({
  background: 'rgba(43, 43, 43, 1)',
  height: '100%',
  width: '4%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px 0 0 12px',
});

export const inputField = style({
  backgroundColor: 'rgba(43, 43, 43, 1)',
  color: '#fff',
  height: '100%',
  width: '100%',
  paddingLeft: '40px',
  borderRadius: '12px',
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  boxSizing: 'border-box',
  '::placeholder': {
    color: '#555',
  },
  ':focus': {
    boxShadow: '0px 0px 4px rgba(255, 255, 255, 0.2)',
  },
});

export const clockIcon = style({
  left: 20,
  zIndex: '100',
  position: 'absolute',
});

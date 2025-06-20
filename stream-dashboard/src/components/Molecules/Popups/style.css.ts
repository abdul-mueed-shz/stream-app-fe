import { style } from '@vanilla-extract/css';

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const formStyle = style({
  marginBottom: '40px',
});

export const modalContent = style({
  background: 'rgba(33, 33, 33, 1)',
  color: '#FFFFFF',
  borderRadius: '8px',
  padding: '24px',
  width: '90%',
  maxWidth: '500px',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.25)',
});

export const formContainer = style({
  width: '400px',
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexDirection: 'column',
});

// Modal

export const label = style({
  marginTop: '20px',
});

export const inputStyle = style({
  outline: 'none',
  marginTop: '10px',
  height: '23px',
  width: '100%',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '10px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '2px solid rgba(133, 133, 133, 0.66)',
  backgroundColor: 'rgba(33, 33, 33, 1)',
  color: '#FFF',
  '::placeholder': {
    color: 'rgba(255, 255, 255, 0.6)',
  },
});

export const plainButton = style({
  color: 'white',
  fontSize: '16px',
  fontWeight: 600,
  backgroundColor: 'rgba(33, 33, 33, 1)',
  border: 'none',
  cursor: 'pointer',
  height: '50px',
  width: '120px',
});

export const buttonStyle = style({
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  color: 'black',
  border: 'none',
  height: '50px',
  width: '120px',
});

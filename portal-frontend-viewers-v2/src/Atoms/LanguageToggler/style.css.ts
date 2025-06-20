
import { style } from '@vanilla-extract/css';

// The toggler wrapper to hold the selector and dropdown
export const toggler = style({
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
});

// Language selector (flag, code, and dropdown arrow)
export const languageSelector = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px',
  backgroundColor: '#fff',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
});



// Text for language code (e.g., EN, SV)
export const text = style({
  fontSize: '14px',
  fontWeight: '500',
  color: '#000',
});

// Dropdown container (for language options)
export const dropdown = style({
  position: 'absolute',
  top: '100%',
  left: '0',
  marginTop: '10px',
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  zIndex: '100',
});

// Each dropdown item (flag and code)
export const dropdownItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  gap: '8px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
});

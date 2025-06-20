import { style } from '@vanilla-extract/css';

export const tabContainerStyle = style({
  maxWidth: '800px',
  margin: '0 auto',
  overflow: 'hidden',
});

export const tabHeaderStyle = style({
  display: 'flex',
  width: '100%',
  borderBottom: '1px solid rgba(146, 146, 156, 1)',
  backgroundColor: '#0f0f0f !important',
});

export const tabStyle = style({
  flex: 1,
  fontSize: '14px',
  fontWeight: 400,
  padding: '0px 24px 12px 24px',
  cursor: 'pointer',
  backgroundColor: '#0f0f0f',
  transition: 'background-color 0.3s',
  color: 'white',
  textAlign: 'center',
  position: 'relative',
});

export const activeTabStyle = style({
  backgroundColor: '#0f0f0f',
  color: 'white',
  fontWeight: 700,
});

export const tabContentStyle = style({
  // padding: '20px',
  // lineHeight: '1.6',
});

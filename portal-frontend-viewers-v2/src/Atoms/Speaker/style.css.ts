import { style } from '@vanilla-extract/css';

export const speakersContainer = style({
  display: 'flex',
  gap: '20px',
  margin: '20px 0',
});

export const speaker = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const avatar = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#ddd',
});

export const speakerInfo = style({
  display: 'flex',
  flexDirection: 'column',
});

export const speakerName = style({
  fontWeight: 400,
  fontSize: '14px',
});

export const speakerRole = style({
  color: 'rgba(170, 170, 170, 1)',
  fontSize: '12px',
  fontWeight: 400,
  marginTop: '5px',
});

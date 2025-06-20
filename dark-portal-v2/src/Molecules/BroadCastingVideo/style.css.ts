import { style } from '@vanilla-extract/css';

export const playerContainer = style({
  width: '100%',
  margin: '0 auto',
});

export const currentSpeaker = style({
  fontSize: '14px',
  marginTop: '5px',
  fontWeight: 400,
  color: 'rgba(123, 131, 146, 1)',
});

export const videoPlayer = style({
  width: '100%',
  height: '0px',
  paddingTop: '56.25%' /* 16:9 aspect ratio */,
  backgroundColor: '#333',
  position: 'relative',
  borderRadius: '4px',
  overflow: 'hidden',
});

export const iframe = style({
  width: '100%',
  height: '100%',
  border: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const controls = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 10px',
  height: '100%',
  color: 'white',
});

export const timeDisplay = style({
  position: 'absolute',
  top: '5px',
  left: '10px',
  fontSize: '12px',
});

export const progressBar = style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '80%',
  height: '3px',
  backgroundColor: '#666',
});

export const progress = style({
  width: '50%',
  height: '100%',
  backgroundColor: '#fff',
});

export const title = style({
  fontSize: '25px',
  fontWeight: 400,
  margin: '10px 0',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '16px',
    },
  },
});

export const date = style({
  color: 'rgba(148, 148, 148, 1)',
  fontWeight: 400,
  fontSize: '18px',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '12px',
    },
  },
});

export const sectionTitle = style({
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'white',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '16px',
    },
  },
});

export const description = style({
  fontSize: '16px',
  lineHeight: '1.5',
  marginTop: '10px',
  color: 'rgba(181, 181, 181, 1)',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '12px',
    },
  },
});

export const contentContainer = style({
  background: 'rgba(33, 33, 33, 1)',

  borderRadius: '12px',
  // boxShadow: ' 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  padding: '20px 10px',
  '@media': {
    '(max-width: 768px)': {
      marginBottom: '20px',
    },
  },
});

import { style } from '@vanilla-extract/css';

// export const listStyle = style({
//   listStyle: 'none',
//   padding: 0,
//   margin: 0,
//   overflowY: 'scroll',
//   height: '500px',
// });

// export const listItemStyle = style({
//   display: 'flex',
//   flexDirection: 'column',
//   padding: '10px',
//   cursor: 'pointer',
//   // alignItems: 'center',
//   height: '65px',
//   borderBottom: '1px solid rgba(246, 246, 246, 1)',
//   color: 'black',
//   ':last-child': {
//     borderBottom: 'none',
//   },
//   ':hover': {
//     backgroundColor: 'rgba(216, 216, 216, 1)',
//   },
// });

// export const iconStyle = style({
//   marginRight: '12px',
// });

// // export const textStyle = style({
// //   flex: 1,
// // });

// export const durationStyle = style({
//   margin: 0,
//   padding: 0,
//   fontSize: '0.8em',
//   color: 'black',
// });

export const listStyle = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const listItemStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderBottom: '1px solid #eee',
  cursor: 'pointer',
});

export const durationStyle = style({
  color: 'rgba(31, 32, 41, 1)',
  marginLeft: '10px',
  fontSize: '12px',
  fontWeight: 400,
  marginTop: '5px',
});

export const speakersListStyle = style({
  marginTop: '10px',
  padding: '10px',
  backgroundColor: '#f5f5f5',
});

export const speakerItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  // marginBottom: '20px',
  // marginTop: '20px',
  height: '40px',
  // border: '1px solid red',
});

export const speakerImageStyle = style({
  marginRight: '10px',
  borderRadius: '50%',
});

export const divider = style({
  width: '100%',
  height: '0.3px',
  background: 'rgba(181, 181, 181, 0.33)',
});

export const scrollbar_custom = style({
  // scrollbarWidth: '10px',
  scrollbarColor: 'red',

  '::-webkit-scrollbar': {
    width: '6px',
    borderRadius: '8px',
  },
  '::-webkit-scrollbar-track': {
    background: 'white',
    borderRadius: '8px',
  },
  '::-webkit-scrollbar-thumb': {
    background: 'grey',
    borderRadius: '8px',
  },
  // '::-webkit-scrollbar-thumb:hover': {
  //   background: 'grey',
  // },
});

// 'use client';
// import Image from 'next/image';
// import {
//   accordionStyles,
//   tvContainer,
//   contentContainer,
//   duration,
//   videoTitle,
//   openAccordionStyles,
//   pointerCursor,
// } from './style.css';
// import { images } from '../../config';
// import { useState } from 'react';

// const Speaker = () => {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <Image src={images.avatar} width={28} height={28} alt='avatar' />
//       <div style={{ marginLeft: '5px' }}>
//         <p style={{ fontSize: '12px', fontWeight: 400 }}>Speaker Name</p>
//         <p
//           style={{
//             fontWeight: 400,
//             fontSize: '12px',
//             color: 'rgba(170, 170, 170, 1)',
//             marginTop: '3px',
//           }}
//         >
//           Host
//         </p>
//       </div>
//     </div>
//   );
// };

// const Accordion = ({ video, videoNo, showBottomBorder }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div
//         className={accordionStyles}
//         style={{
//           borderBottom: showBottomBorder ? '1px solid rgba(246, 246, 246, 1)' : 'none',
//           background: open ? 'rgba(216, 216, 216, 1)' : 'white',
//         }}
//       >
//         <div className={contentContainer}>
//           <div className={tvContainer}>
//             <Image src={images.tv} width={16} height={16} alt='tv-live' />
//             <p className={videoTitle}>
//               0{videoNo + 1} - {video?.title}
//             </p>
//           </div>
//           <p className={duration}>(13:09)</p>
//         </div>
//         <Image
//           className={pointerCursor}
//           src={open ? images?.upArrow : images.downArrow}
//           alt='down-arrow'
//           height={12}
//           width={12}
//           onClick={() => setOpen(!open)}
//         />
//       </div>
//       {open &&
//         Array(5)
//           .fill(0)
//           .map(() => (
//             <div className={openAccordionStyles}>
//               {/* <Speaker /> */}
//               <Speaker />
//             </div>
//           ))}
//     </>
//   );
// };

// export default Accordion;


'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  accordionStyles,
  tvContainer,
  contentContainer,
  duration,
  videoTitle,
  openAccordionStyles,
  pointerCursor,
} from './style.css';
import { images } from '../../config';
import { useState } from 'react';

const Speaker = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image src={images.avatar} width={28} height={28} alt='avatar' />
      <div style={{ marginLeft: '5px' }}>
        <p style={{ fontSize: '12px', fontWeight: 400 }}>Speaker Name</p>
        <p
          style={{
            fontWeight: 400,
            fontSize: '12px',
            color: 'rgba(170, 170, 170, 1)',
            marginTop: '3px',
          }}
        >
          Host
        </p>
      </div>
    </div>
  );
};

const Accordion = ({ video, videoNo, showBottomBorder }) => {
  const [open, setOpen] = useState(false);

  const containerVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={accordionStyles}
        style={{
          borderBottom: showBottomBorder ? '1px solid rgba(246, 246, 246, 1)' : 'none',
          background: open ? 'rgba(216, 216, 216, 1)' : 'white',
        }}
      >
        <div className={contentContainer}>
          <div className={tvContainer}>
            <Image src={images.tv} width={16} height={16} alt='tv-live' />
            <p className={videoTitle}>
              0{videoNo + 1} - {video?.title}
            </p>
          </div>
          <p className={duration}>(13:09)</p>
        </div>
        <motion.div
          className={pointerCursor}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={images.downArrow} alt='down-arrow' height={12} width={12} />
        </motion.div>
      </div>
      <motion.div variants={containerVariants} initial='closed' animate={open ? 'open' : 'closed'}>
        {open &&
          Array(5)
            .fill(0)
            .map((_, index) => (
              <div key={index} className={openAccordionStyles}>
                <Speaker />
              </div>
            ))}
      </motion.div>
    </>
  );
};

export default Accordion;


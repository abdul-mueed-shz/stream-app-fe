import svg from '@/config/svg';
import * as styles from './style.css';
import { ChartNoAxesGantt, TvMinimalPlay } from 'lucide-react';
import { Clapperboard } from 'lucide-react';
import Image from 'next/image';
import Checkbox from '@/components/Atoms/Checkbox';

const StreamRow = ({ item }) => {
  return (
    <div className={styles.rowContainer}>
      <div style={{ width: '300px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 1 }}>
          <Checkbox />
        </div>

        <div
          style={{
            marginLeft: '26px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image src={svg.dummyImg} height={122} width={122} />
          <div style={{ marginLeft: '10px' }}>
            <p style={{ fontSize: '14px' }}>Test</p>
            <p style={{ color: 'rgba(181, 181, 181, 1)', fontSize: '12px', marginTop: '2px' }}>
              dummytext{' '}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.Span2}>{item?.type}</div>
        <div className={styles.Span2}>{item?.visibility}</div>
        <div className={styles.Span2}>
          {item?.date}
          <p
            style={{
              color: item?.mode == 'LIVE' ? 'rgba(220, 38, 38, 1)' : 'white',
              marginTop: '2px',
            }}
          >
            {item?.mode}
          </p>
        </div>
        <div className={styles.IconSpan2}>
          <ChartNoAxesGantt />
        </div>
        <div className={styles.IconSpan2}>
          <Clapperboard />
        </div>
        <div className={styles.IconSpan2}>
          <TvMinimalPlay />
        </div>
      </div>
    </div>
  );
};

export default StreamRow;

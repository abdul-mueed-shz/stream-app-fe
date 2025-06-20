import LiveBroadcast from '../../Atoms/LiveBroadcast';
import { containerStyle } from './style.css';

const LivePage = () => {
  return (
    <div className={containerStyle}>
      <LiveBroadcast />
    </div>
  );
};
export default LivePage;

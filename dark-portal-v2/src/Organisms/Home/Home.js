import LiveBroadcast from '../../Atoms/LiveBroadcast';
import BroadcastList from '../../Molecules/BroadcastList';
import { containerStyle, divider } from './style.css';

const dummyBroadcasts = [
  { id: '1', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '2', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '3', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '4', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
];

const Home = () => {
  return (
    <div className={containerStyle}>
      <LiveBroadcast />

      {/* Divider */}
      <div className={divider}> </div>

      <BroadcastList title='Upcoming Broadcasts' broadcasts={dummyBroadcasts} />
      <BroadcastList title='Previous Broadcasts' broadcasts={dummyBroadcasts} showPrevious={true} />
    </div>
  );
};
export default Home;

import BroadcastList from '../../Molecules/BroadcastList';
import { containerStyle } from './style.css';

const dummyBroadcasts = [
  { id: '1', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '2', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '3', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '4', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '1', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '2', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '3', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '4', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '1', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '2', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '3', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
  { id: '4', title: 'Lorem Ipsum is simply dummy text dummy text', date: 'Scheduled YY/MM/DD' },
];
const UpcomingBroadcast = () => {
  return (
    <div className={containerStyle}>
      <BroadcastList title='Upcoming Broadcasts' broadcasts={dummyBroadcasts} />
    </div>
  );
};
export default UpcomingBroadcast;

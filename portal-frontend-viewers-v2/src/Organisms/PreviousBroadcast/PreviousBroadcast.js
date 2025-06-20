import { containerStyle } from './style.css';
import BroadcastList from '../../Molecules/BroadcastList';

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

const PreviousBroadcast = () => {
  return (
    <div className={containerStyle}>
      <BroadcastList title='Previous Broadcasts' broadcasts={dummyBroadcasts} showPrevious={true} />
    </div>
  );
};

export default PreviousBroadcast;

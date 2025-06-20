import {
  tableStyles,
  headerStyles,
  rowStyles,
  cellStyles,
  firstCellStyles,
  lastCellStyles,
  tableTitle,
} from './style.css';

const Table = () => {
  const updates = [
    { title: 'Weekly Tech Update', date: '15 Jun, 2023', time: '14:00' },
    { title: 'Weekly Tech Update', date: '15 Jun, 2023', time: '14:00' },
    { title: 'Weekly Tech Update', date: '15 Jun, 2023', time: '14:00' },
  ];
  return (
    <div>
      <p className={tableTitle}>Upcoming Broadcasts</p>

      <table className={tableStyles}>
        <thead>
          <tr>
            <th className={headerStyles}>Title</th>
            <th className={headerStyles}>Date</th>
            <th className={headerStyles}>Time</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update, index) => (
            <tr key={index} className={rowStyles}>
              <td className={`${cellStyles} ${firstCellStyles}`}>{update.title}</td>
              <td className={cellStyles}>{update.date}</td>
              <td className={`${cellStyles} ${lastCellStyles}`}>{update.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

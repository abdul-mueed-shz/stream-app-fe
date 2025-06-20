
import * as styles from './style.css';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} type='text' placeholder='Search...' />
      <div className={styles.icon}>
        <Search size={20} />
      </div>
    </div>
  );
};

export default SearchBar;

import * as styles from './style.css';
import { Pencil, Plus, UserRound } from 'lucide-react';
const ProfilePictureEditor = ({ mode }) => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.avatar}>
        <UserRound color='black' size={80} />
        <div className={styles.plusButton}>
          {mode == 'Add' ? <Plus size={18} /> : <Pencil size={18} />}
        </div>
      </div>

      <div className={styles.btnContainer}>
        <p className={styles.btn}>Crop</p>
        <p className={styles.btnDanger}>Clear</p>
      </div>
    </div>
  );
};
export default ProfilePictureEditor;

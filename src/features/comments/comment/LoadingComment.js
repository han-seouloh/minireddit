import styles from './LoadingComment.module.css';
import { FaReddit } from 'react-icons/fa';

export const LoadingComment = () => {
  return (
    <div className={styles['comment-container']}>
      <div className={styles['user-container']}>
        <div className={styles['avatar']}>
          <FaReddit/>
        </div>
        <div className={styles['user']}></div>
      </div>
      <div className={styles['comment']}></div>
    </div>
  );
};
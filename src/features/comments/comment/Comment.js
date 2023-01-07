import styles from './Comment.module.css';
import { FaReddit } from 'react-icons/fa';

export const Comment = ({data}) => {
  return (
    <div className={styles['comment-container']}>
      <div className={styles['user-container']}>
        <div className={styles['avatar']}>
          <FaReddit/>
        </div>
        <div className={styles['user']}>
        <p>u/{data.author}</p>
        </div>
      </div>
      <div className={styles['comment']}>
        <p>{data.body}</p>
      </div>
    </div>
  );
};
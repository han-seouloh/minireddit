import styles from './Subreddit.module.css';
import { FaReddit } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import {setSubreddit} from '../../store/subredditSlice';

export const Subreddit = ({subname}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSubreddit(subname));
  }

  return (
    <div className={`${styles['subreddit-container']}`} onClick={handleClick}>
      <div className={styles['icon-container']}>
        <FaReddit className={styles['icon']}/>
      </div>
      <p className={styles['subreddit-name']}>{subname}</p>
    </div>
  );
}
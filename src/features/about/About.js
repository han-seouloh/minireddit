import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectSubreddit} from '../../store/subredditSlice';
import { getSubreddit } from '../../api/reddit';
import {Time} from '../time/Time';
import styles from './About.module.css';
import { FaReddit } from 'react-icons/fa';

export const About = () => {
  const dispatch = useDispatch();
  const {subreddit, subredditInfo, isError} = useSelector(selectSubreddit);
  
  useEffect(()=>{
    dispatch(getSubreddit(subreddit));
  },[subreddit, dispatch]);

  if (isError) {
    return <div>Oops, something went wrong... Please try reloading the page.</div>
  }

  return (
    <div className={`${styles['about-container']}`}>
      <div className={`${styles['subreddit-container']}`}>
        <div className={`${styles['reddit-icon-container-margin']}`}>
          <div className={`${styles['reddit-icon-container']}`}>
            {!subredditInfo.icon_img
              ? <FaReddit />
              : <img src={subredditInfo.icon_img} alt='reddit icon' className={`${styles['reddit-icon']}`} />
            }
          </div>
        </div>
        <p className={styles.subName} >
          {`r/${subredditInfo.display_name}`}
        </p>
      </div>
      <div className={styles['about-text-container']}>
        <h2 className={styles['about-header']}>About</h2>
        <p className={styles['about-text']}>{subredditInfo.public_description}</p>
      </div>
      <Time />
    </div>
  );
}
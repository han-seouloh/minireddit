import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti';
import { BiCommentDetail } from 'react-icons/bi';
import styles from './LoadingPost.module.css'

export const LoadingPost = () => {
  return (
    <div className={styles['loading-post-container']}>
      <div className={styles['title-container']}></div>
      <div className={styles['content-container']}></div>
      <div className={styles['comment-container']}>
        <div className={styles['subreddit-display']}></div>
        <div className={styles['time-display']}></div>
          <BiCommentDetail className={styles['comments-icon']}/>
          <p className={styles['period-loading']}>
            <span className={`${styles['period-1']} ${styles['period-animation']}`}>.</span>
            <span className={`${styles['period-2']} ${styles['period-animation']}`}>.</span>
            <span className={`${styles['period-3']} ${styles['period-animation']}`}>.</span>
          </p>
      </div>
      <div className={styles['upvotes-container']}>
        <TiArrowUpOutline />
        <p className={styles['period-loading']}>
          <span className={`${styles['period-1']} ${styles['period-animation']}`}>.</span>
          <span className={`${styles['period-2']} ${styles['period-animation']}`}>.</span>
          <span className={`${styles['period-3']} ${styles['period-animation']}`}>.</span>
        </p>
        <TiArrowDownOutline />
      </div>
    </div>
  )
};
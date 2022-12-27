import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti';
import { BiCommentDetail } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../../store/postsSlice';
import styles from './Post.module.css'

export const Post = () => {
  const {posts, selectedPost, hasError} = useSelector(selectPosts);

  return (
    <div className={styles['loading-post-container']}>
      <div className={styles['title-container']}>{'something'}</div>
      <div className={styles['content-container']}>
        <img 
          src={''} 
          alt={``}
          className={styles['image-display']}
        />
      </div>
      <div className={styles['comment-container']}>
        <div className={styles['subreddit-display']}></div>
        <div className={styles['time-display']}></div>
          <BiCommentDetail className={styles['comments-icon']}/>
          <p className={styles['period-loading']}>{/*2.5k*/}</p>
      </div>
      <div className={styles['upvotes-container']}>
        <TiArrowUpOutline />
        <p className={styles['period-loading']}>{/*2.5k*/}</p>
        <TiArrowDownOutline />
      </div>
    </div>
  )
};
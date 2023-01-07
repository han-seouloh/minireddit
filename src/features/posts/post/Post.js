import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti';
import { BiCommentDetail } from 'react-icons/bi';
import { formatNum } from '../../../utils/formatNum';
import { Media } from '../media/Media';
import moment from 'moment';
import styles from './Post.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getComments } from '../../../api/reddit';
import { removeComments } from '../../../store/commentsSlice';
import { Comments } from '../../comments/Comments';

moment.updateLocale('en', {
  relativeTime : {
      mm: "%d mins",
      hh: "%d hrs",
  }
});

export const Post = ({data}) => {
  const [commentVisibility, setCommentVisibility] = useState(false);
  const {subreddit, id:postId} = data;
  const dispatch = useDispatch();

  const showComments = () => {
    if (commentVisibility) {
      setCommentVisibility(false);
      dispatch(removeComments({id:postId}));
    } else {
      setCommentVisibility(true);
      dispatch(getComments({subreddit, postId}));
    };
    
  }

  return (
    <div className={styles['post-container']}>
      <div className={styles['title-container']}>{data.title}</div>
      <div className={styles['content-container']}>
        <div className={styles['media-container']}>
          <Media data={data} />
        </div>
        <p className={styles['text-display']}>{data.selftext}</p>
        {
          ((data.subreddit==='worldnews')
          || (data.subreddit==='todayilearned')
          || (data.subreddit==='nottheonion'))
          && <a href={data.url} className={styles['text-display']}>{data.url}</a>
        }
      </div>
      <div className={styles['data-container']}>
        <p className={styles['subreddit-display']}>Posted by <span>{data.author}</span> at <span>{data['subreddit_name_prefixed']}</span></p>
        <div className={styles['stats-container']}>
          <p className={styles['time-display']}>{moment.unix(data.created).fromNow()}</p>
          <div className={styles['comments-container']}>
            <BiCommentDetail className={styles['comments-icon']} onClick={showComments} />
            <p className={styles['comments-count']}>{formatNum(data.num_comments)}</p>
          </div>
        </div>
      </div>
      <div className={styles['upvotes-container']}>
        <TiArrowUpOutline />
        <p className={styles['upvote-count']}>{formatNum(data.ups)}</p>
        <TiArrowDownOutline />
      </div>
      {commentVisibility
        ? <Comments postId={postId} />
        : null 
      }
    </div>
  )
};
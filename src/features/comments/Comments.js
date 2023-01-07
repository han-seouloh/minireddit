import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getComments } from '../../api/reddit';
import { selectSubreddit } from '../../store/subredditSlice';
import { selectComments } from '../../store/commentsSlice';
import { LoadingComment } from './comment/LoadingComment';
import { Comment } from './comment/Comment';
import styles from './Comments.module.css';

export const Comments = ({postId}) => {
  const {subreddit} = useSelector(selectSubreddit);
  const {comments, isLoading} = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments({subreddit, postId}));
  },[subreddit, postId, dispatch]);

  return (
    <div className={styles['comment']}>
      {isLoading
        ? <LoadingComment />
        : comments[`${postId}`].map((comment, index) => 
          comment.data.distinguished !== 'moderator' &&
          comment.data.body &&
          <Comment key={index} data={comment.data} />
        )
      }
    </div>
  )
}
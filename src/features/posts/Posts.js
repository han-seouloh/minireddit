import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../api/reddit';
import { selectSubreddit } from '../../store/subredditSlice';
import { useEffect } from 'react';
import {Post} from './post/Post';
import {LoadingPost} from './post/LoadingPost';
import styles from './Posts.module.css';

export const Posts = () => {
  const {subreddit} = useSelector(selectSubreddit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(subreddit))
  },[subreddit, dispatch]);

  return (
    <div className={styles['posts-container']}>
      <Post />
      <br/>
      <LoadingPost />
    </div>
  );
}
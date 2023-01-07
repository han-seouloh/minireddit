import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../api/reddit';
import { selectSubreddit } from '../../store/subredditSlice';
import { useEffect } from 'react';
import {Post} from './post/Post';
import {LoadingPost} from './post/LoadingPost';
import styles from './Posts.module.css';
import { selectPosts } from '../../store/postsSlice';

export const Posts = () => {
  const {subreddit} = useSelector(selectSubreddit);
  const {posts, time, isLoading} = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({subreddit, time}));
  },[subreddit, time, dispatch]);

  return (
    <div className={styles['posts-container']}>
      {isLoading
        ? (
          <div >
            <LoadingPost />
            <LoadingPost />
          </div>
        )
        : posts.map(post => <Post data={post} key={post.id} />) 
      }
    </div>
  );
}
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSubreddit = createAsyncThunk(
  'subreddit/getSubreddit',
  async (subreddit) => {
    if (subreddit === 'all') {
      return {
        display_name: subreddit,
				public_description:
					'The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.',
				subscribers: 'N/A',
				active_user_count: 'N/A'
      };
    };
    
    const response = await fetch (`https://www.reddit.com/r/${subreddit}/about.json`);
    const json = await response.json();

    if (!json.data) {
      return {
        display_name: subreddit,
				public_description:
					'Unable to display subreddit',
				subscribers: 'N/A',
				active_user_count: 'N/A'
      };
    };

    return json.data;
  }
);

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async ({subreddit, time}) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/top/.json?t=${time}`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
  }
);

export const searchPosts = createAsyncThunk(
  'posts/searchPosts',
  async (query) => {
    const response = await fetch(`https://www.reddit.com/r/all/search.json?q=${query}&limit=50`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
  }
);
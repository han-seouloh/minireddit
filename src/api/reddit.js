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
    const data = await response.json();

    if (!data.data) {
      return {
        display_name: subreddit,
				public_description:
					'Unable to display subreddit',
				subscribers: 'N/A',
				active_user_count: 'N/A'
      };
    };

    return data.data;
  }
);
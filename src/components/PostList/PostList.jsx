import React from 'react';
import PostListItem from '../PostListItem';
import './PostList.css';

const PostList = () => (
  <ul className="app-list list-group">
    <PostListItem />
    <PostListItem />
    <PostListItem />
  </ul>
);

export default PostList;

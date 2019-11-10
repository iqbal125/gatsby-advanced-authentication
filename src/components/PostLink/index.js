import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from './postlink.module.css';

const PostLink = ({ post }) => {
  return (
    <div>
      <Link to={post.path}>
        {post.title} <small>{post.date}</small>
      </Link>
    </div>
  );
};

export default PostLink;

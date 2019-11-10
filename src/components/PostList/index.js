import React from 'react';
import { Link } from 'gatsby';
import styles from './postlink.module.css';

const PostList = ({ post }) => {
  return (
    <div>
      <Link className={styles.link} to={post.path}>
        {post.title} <small>{post.date}</small>
      </Link>
    </div>
  );
};

export default PostList;

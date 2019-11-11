import React from 'react';
import { Link } from 'gatsby';
import styles from './postlink.module.css';
import Img from 'gatsby-image';

const PostList = ({ post }) => {
  let featuredImg = post.featuredImage.childImageSharp.fluid;

  return (
    <div>
      <Link className={styles.link} to={post.path}>
        <Img fluid={featuredImg} />
        {post.title} <small>{post.date}</small>
      </Link>
    </div>
  );
};

export default PostList;

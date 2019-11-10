import React, { useState } from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => {
  return (
    <div>
      <Link to={post.path}>{post.title}</Link>
    </div>
  );
};

export default PostLink;

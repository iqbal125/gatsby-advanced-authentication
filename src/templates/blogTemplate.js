import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import TagsList from '../components/TagsList';
import styles from './styles/blogTemplate.module.css';

const BlogTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, author, tags } = frontmatter;

  return (
    <Layout>
      <div className={styles.blog_layout}>
        <h1>{title}</h1>
        <h2>
          {date} by: {author}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <TagsList tags={tags} />
      </div>
    </Layout>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;

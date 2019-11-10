import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import TagsList from '../components/TagsList';

const BlogTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h2>{date}</h2>
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

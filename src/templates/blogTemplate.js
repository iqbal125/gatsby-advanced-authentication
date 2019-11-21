import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import TagsList from '../components/TagsList';
import styles from './styles/blogTemplate.module.css';
import SEO from '../components/SEO';

const BlogTemplate = ({ data }) => {
  const { frontmatter, html, excerpt } = data.markdownRemark;
  const { title, date, author, tags, path } = frontmatter;
  const image = frontmatter.featuredImage.childImageSharp.fluid;

  const seoData = {
    title,
    description: excerpt,
    image,
    article: true,
    pathname: path
  };

  return (
    <>
      <SEO seoData={seoData} />
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
    </>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        path
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

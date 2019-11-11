import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import PostList from '../components/PostList';

const Blog = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div>
        {edges
          ? edges.map(edge => (
              <PostList key={edge.node.id} post={edge.node.frontmatter} />
            ))
          : null}
      </div>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
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
    }
  }
`;

import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ProfilePic from "../../content/assets/profile-pic.png";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import Bio from "../components/bio"
import PostCard from "../components/postCard";

import "../style/normalize.css";
import "../style/all.scss";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  let postCounter = 0;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Blog"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header style={{ textAlign: "center", paddingBottom: "50px" }}>
          <h5 className="page-head-title">
            <div style={{ textAlign: "center" }}>
              <img src={ProfilePic} style={{ height: "200px" }} alt="Profile" />
            </div>
            {/* {data.site.siteMetadata.description} */}
          </h5>
          <h4>
            Full-stack software engineer with an entrepreneurial spirit with 5
            years of digital marketing, product management, and community
            management experience, working in tech (startup to FAANG),
            education, and music as well as leading a profitable startup. I'm a
            recent Flatiron School graduate and accustomed to the Agile
            methodology, working across technical and non-technical teams, and
            managing project roadmaps.
          </h4>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++;
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          );
        })}
      </div>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
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

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);

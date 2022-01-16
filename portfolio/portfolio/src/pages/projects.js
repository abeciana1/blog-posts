import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "gatsby";
// import ProjectTech from "../components/ProjectTech"

import Layout from "../components/layout";
import SEO from "../components/seo";

import LeCineLogo from "../../content/assets/le-cine-logo.png";
import RubyGems from "../../content/assets/rubygems_sticker_2048x2048.png";

import "../style/normalize.css";
import "../style/all.scss";

const ProjectPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  console.log(siteTitle);
  debugger;
  return (
    <Layout title={siteTitle}>
      <SEO
        title="Projects"
        keywords={[`javascript`, `react`, `ruby`, `ruby on rails`]}
      />
      <Row>
        <Col xs={6} md={4}>
          <Card
            style={{
              width: "23rem",
              border: "1px solid black",
              padding: "5px"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Card.Img
                variant="top"
                style={{ height: "250px" }}
                src={LeCineLogo}
              />
            </div>
            <Card.Body>
              <Card.Title>
                <h5>
                  <b>Le Cine</b>
                </h5>
              </Card.Title>
              <Card.Text>
                A film club management app to bring meaningful conversation and
                film lovers together under one roof.
              </Card.Text>
            </Card.Body>
            <Link to="https://le-cine-frontend.herokuapp.com/">Live Demo</Link>
            <br />
            <Link to="https://github.com/abeciana1/le-cine-frontend">
              GitHub (Frontend)
            </Link>
            <br />
            <Link to="https://github.com/abeciana1/le-cine-backend">
              GitHub (Backend)
            </Link>
          </Card>
        </Col>
        <Card
          style={{ width: "23rem", border: "1px solid black", padding: "5px" }}
        >
          <div style={{ textAlign: "center" }}>
            <Card.Img
              variant="top"
              style={{ height: "250px" }}
              src={RubyGems}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <h5>
                <b>rcli_app</b>
              </h5>
            </Card.Title>
            <Card.Text>
              This gem focuses on helping beginner Rubyists get started with
              creating their own command-line applications.
            </Card.Text>
          </Card.Body>
          <Link to="https://rubygems.org/gems/rcli_app">RubyGems</Link>
          <br />
          <Link to="https://github.com/abeciana1/rcli_app">GitHub</Link>
          <br />
        </Card>
      </Row>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ProjectPage location={props.location} data={data} {...props} />
    )}
  />
);

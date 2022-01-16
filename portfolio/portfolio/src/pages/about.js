import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
import MLHLogo from "../../content/assets/1200px-Mlh-logo-color.svg.png";
import SweetStatic from "../../content/assets/sweet static.jpg";
import NYUKimmel from "../../content/assets/nyu-kimmel.png";
import NYUWagner from "../../content/assets/nyu-wagner.png";
import FlatironSchool from "../../content/assets/FS_wiki.png";
import BaruchCollege from "../../content/assets/baruch-logo-zicklin.png";
import Suffolk from "../../content/assets/Suffolk.png";
import Gateway from "../../content/assets/the-gateway.png";
import KingPizza from "../../content/assets/king-pizza.jpg";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  console.log(siteTitle);
  debugger;
  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[`javascript`, `react`, `ruby`, `ruby on rails`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3>
            An enthusiastic freelance full stack developer looking for new
            opportunities!
          </h3>
          <h3 id="dynamic-styles">About Me</h3>
          <p>
            Full-stack software engineer with an entrepreneurial spirit with 5
            years of digital marketing, product management, and community
            management experience, working in tech (startup to FAANG),
            education, and music as well as leading a profitable startup. I'm a
            recent Flatiron School graduate and accustomed to the Agile
            methodology, working across technical and non-technical teams, and
            managing project roadmaps.
            {/* Full-stack software engineer with an entrepreneurial spirit with
            experience in digital marketing and leading a startup. Highly
            organized and communicative, especially working under pressure and
            across multiple teams. Agile, flexible, and accustomed to frequent
            changes of pace having previously worked in event production and
            time-sensitive community-driven marketing initiatives. */}
          </p>
          <br />
          <h3>
            <a href="#skills" alt="My Skills">
              My Skills
            </a>{" "}
            |{" "}
            <a href="#experience" alt="My Experience">
              My Experience
            </a>{" "}
            |{" "}
            <a href="#education" alt="My Education">
              My Education
            </a>
          </h3>
          <br />
          <h3 id="skills">My Skills</h3>
          <h4>Technical</h4>
          <img
            src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"
            alt="Ruby"
          />{" "}
          Ruby
          <img
            src="https://icongr.am/devicon/rails-original-wordmark.svg?size=128&color=currentColor"
            alt="Rails"
            width="40"
            height="40"
          />{" "}
          Rails{" "}
          <img
            src="https://img.icons8.com/color/48/000000/nodejs.png"
            alt="NodeJS"
          />
          NodeJS{" "}
          <img
            src="https://img.icons8.com/color/48/000000/ruby-gem.png"
            alt="RubyGems"
          />{" "}
          RubyGems
          <img
            src="https://img.icons8.com/color/48/000000/html-5.png"
            alt="HTML5"
          />{" "}
          HTML5
          <img
            src="https://img.icons8.com/color/48/000000/css3.png"
            alt="CSS3"
          />{" "}
          CSS3
          <img
            src="https://img.icons8.com/color/48/000000/javascript.png"
            alt="JavaScript"
          />{" "}
          JavaScript
          <img
            src="https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"
            alt="React"
            width="40"
            height="40"
          />{" "}
          React{" "}
          <img
            src="https://img.icons8.com/color/48/000000/redux.png"
            alt="Redux"
            width="40"
            height="40"
          />{" "}
          Redux{" "}
          <img
            src="https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor"
            alt="PostgreSQL"
            width="40"
            height="40"
          />{" "}
          PostgreSQL{" "}
          <img
            src="https://icongr.am/devicon/bootstrap-plain.svg?size=128&color=currentColor"
            alt="Bootstrap"
            width="40"
            height="40"
          />{" "}
          Bootstrap{" "}
          <img
            src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg"
            alt="Gatsby"
            width="40"
            height="40"
          />{" "}
          Gatsby{" "}
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="Git"
            width="40"
            height="40"
          />{" "}
          Git <br />
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/twilio-282195.png"
            alt="Twilio"
            width="40"
            height="40"
          />{" "}
          Twilio{" "}
          <img
            src="https://img.icons8.com/color/48/000000/jira.png"
            alt="Jira"
            width="40"
            height="40"
          />{" "}
          Jira{" "}
          <img
            src="https://img.icons8.com/fluent/48/000000/sprint-iteration.png"
            alt="Agile"
            height="40"
            width="40"
          />{" "}
          Agile <h4>Graphic Design</h4>
          <img
            src="https://img.icons8.com/color/48/000000/adobe-photoshop.png"
            alt="Adobe Photoshop"
          />{" "}
          Adobe Photoshop
          <img
            src="https://img.icons8.com/color/48/000000/adobe-illustrator.png"
            alt="Adobe Illustrator"
          />{" "}
          Adobe Illustrator
          <img
            src="https://img.icons8.com/color/48/000000/adobe-xd.png"
            alt="Adobe XD"
          />{" "}
          Adobe XD
          <br />
          <img
            src="https://img.icons8.com/color/48/000000/adobe-indesign.png"
            alt="Adobe Indesign"
          />{" "}
          Adobe Indesign
          <h4>Business Tools</h4>
          <img
            src="https://img.icons8.com/windows/32/000000/buffer.png"
            alt="Buffer"
          />{" "}
          Buffer{" "}
          <img
            src="https://img.icons8.com/windows/32/000000/mailchimp.png"
            alt="Mailchimp"
          />{" "}
          Mailchimp{" "}
          <img
            src="https://img.icons8.com/wired/64/000000/salesforce.png"
            alt="Salesforce"
          />{" "}
          Salesforce{" "}
          <img
            src="https://theme.zdassets.com/theme_assets/18251/e951ad889f2b1f3a993a2f4ad73bb84f4aa34953.png"
            alt="Hootsuite"
            height="40px"
          />{" "}
          Hootsuite
          <br />
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/zapier-282557.png"
            alt="Zapier"
            height="40px"
          />{" "}
          Zapier
          <br />
          <h3 id="experience">My Experience</h3>
          <Container>
            <h4>Sweet Static (Brooklyn, NY)</h4>
            <h5>Founder, CEO</h5>
            <h6>November 2015 – Present</h6>
            <em>
              Sweet Static is an independent multimedia music publication and
              community platform focused on underground artists and music scenes
              based in Brooklyn, NY.
            </em>
            <Row>
              <Col xs={6} md={4}>
                <img src={SweetStatic} alt="Sweet Static" />
                <br />
                <a
                  href="https://sweetstatic.com/"
                  al="Sweet Static"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Col>
              <Col xs={6} md={4}>
                <ul>
                  <li>
                    Growing at an average of 150% annually in audience size and
                    web metrics
                  </li>
                  <li>
                    Organizing and promoting sold-out branded events and
                    showcases across the Northeast region, sometimes working
                    with Planned Parenthood, Everytown Gun Control, and the ACLU
                    for charity benefits
                  </li>
                  <li>
                    Overseeing product development, graphic design, HR,
                    editorial planning and editing, and business development
                  </li>
                </ul>
              </Col>
            </Row>
            <h4>Major League Hacking (New York, NY)</h4>
            <h5>Digital Marketing and Program Coordinator</h5>
            <h6>November 2017 – April 2020</h6>
            <em>
              Major League Hacking (MLH) is the official student hackathon
              league.
            </em>
            <Row>
              <Col xs={6} md={4}>
                <img src={MLHLogo} alt="Major League Hacking" />
                <br />
                <a
                  href="https://mlh.io/"
                  alt="Major League Hacking"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Col>
              <Col xs={6} md={4}>
                <ul>
                  <li>
                    Collaborated on new community strategies - increasing
                    completed events by 350% and a 260% increase in attendance,
                    resulting in the empowerment of 13,000+ community members
                  </li>
                  <li>
                    Mentored and advised 800+ professional and student
                    organizers (domestic and international) via community
                    building/management and marketing resources to be used by
                    student organizers
                  </li>
                  <li>
                    Promoted the community and product offerings via social
                    media, email marketing, in-office events, and partnerships -
                    working closely with sponsors - GitHub, JPMC, BlackRock,
                    Amazon, Google, Twilio, Capital One, etc.
                  </li>
                  <li>
                    Created successful email marketing campaigns to an audience
                    of over 140,000+ for various frequencies (seasonally,
                    monthly, and weekly)
                  </li>
                </ul>
              </Col>
            </Row>
            <h4>King Pizza Records</h4>
            <h5>Publicity / Radio Outreach Assistant</h5>
            <h6>July 2015 - September 2017</h6>
            <em>Brooklyn's tastiest DIY record & tape label.</em>
            <Row>
              <Col xs={6} md={4}>
                <img src={KingPizza} alt="King Pizza Records" />
                <br />
                <a
                  href="https://kingpizzarecords.bandcamp.com/"
                  alt="King Pizza Records"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Col>
              <Col xs={6} md={4}>
                <ul>
                  <li>
                    Responsible for securing domestic and international coverage
                    of events and artists by attracting the press via press
                    releases, email correspondence, and networking.
                  </li>
                  <li>
                    Created marketing and public relations guide to be followed
                    by the label and its artists.
                  </li>
                  <li>
                    Maintained close relationships with various radio stations,
                    blogs, and retail stores.
                  </li>
                </ul>
              </Col>
            </Row>
            <h4>New York University - Kimmel Center (New York, NY)</h4>
            <h5>External Events Scheduler</h5>
            <h6>March 2017 – August 2017</h6>
            <em>
              New York University is a private research university based in New
              York City.
            </em>
            <Row>
              <Col xs={6} md={4}>
                <img src={NYUKimmel} alt="NYU Kimmel Center" />
                <br />
                <a
                  href="https://www.nyu.edu/life/campus-resources/kimmel-center.html"
                  alt="NYU Kimmel Center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Col>
              <Col xs={6} md={4}>
                <ul>
                  <li>
                    Booked and kept track of 400+ events, resulting in $350,000
                    in revenue
                  </li>
                  <li>
                    Acted as the liaison between NYU and clients, trusted with
                    high levels of sensitive information from both sides
                  </li>
                </ul>
              </Col>
            </Row>
            <h4>The Gateway</h4>
            <h5>Head Event Booker/Talent Buyer</h5>
            <h6>August 2016 - August 2017</h6>
            <em>A former music venue based in Brooklyn, NY</em>
            <Row>
              <Col>
                <img src={Gateway} alt="The Gateway" />
              </Col>
              <Col>
                <ul>
                  <li>
                    Managed 60-100+ events and concerts each month as well as
                    additional space bookings on an event planning calendar
                  </li>
                  <li>
                    Calculated the risk/reward factors with events, making sure
                    the venue stayed on/below budget
                  </li>
                  <li>
                    Grew and cultivated close relationships with other
                    bookers/promoters, artists, and booking agents
                  </li>
                </ul>
              </Col>
            </Row>
            <h4>
              New York University - Robert F. Wagner Graduate School of Public
              Service (New York, NY)
            </h4>
            <h5>Web Project Coordinator</h5>
            <h6>August 2016 – March 2017</h6>
            <em>
              New York University is a private research university based in New
              York City.
            </em>
            <Row>
              <Col xs={6} md={4}>
                <img src={NYUWagner} alt="NYU Wagner" />
                <br />
                <a
                  href="https://wagner.nyu.edu/"
                  alt="NYU - Robert F. Wagner Graduate School of Public Service"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Col>
              <Col xs={6} md={4}>
                <ul>
                  <li>
                    Acted as the liaison between IT web team and the school’s
                    faculty/staff
                  </li>
                  <li>
                    Supervised content placement and proofreading and provided
                    feedback to editorial team
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <h3 id="education">My Education</h3>
          <Container>
            <h4>Flatiron School</h4>
            <h6>June 2020 – October 2020</h6>
            <Row>
              <Col xs={6} md={4}>
                <img src={FlatironSchool} alt="Flatiron School" />
                <br />
                <a
                  href="https://flatironschool.com/"
                  alt="Flatiron School"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Col>
              <Col xs={6} md={4}>
                <p>
                  Full-Stack Web Development, Ruby on Rails and JavaScript
                  programming bootcamp
                </p>
              </Col>
            </Row>
            <h4>CUNY - Baruch College - Zicklin School of Business</h4>
            <h6>September 2016 – May 2020</h6>
            <Row>
              <Col xs={6} md={4}>
                <img src={BaruchCollege} alt="Baruch College" />
                <br />
                <a
                  href="https://zicklin.baruch.cuny.edu/"
                  alt="Baruch College - Zicklin School of Business"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Col>
              <Col xs={6} md={4}>
                <p>Bachelor of Arts (BA) in Business Administration</p>
                <p>
                  Concentration in Marketing Management, Digital Marketing
                  specialization
                </p>
              </Col>
            </Row>
            <h4>SUNY - Suffolk County Community College</h4>
            <h6>September 2012 – May 2016</h6>
            <Row>
              <Col xs={6} md={4}>
                <img src={Suffolk} alt="Suffolk County Community College" />
                <br />
                <a
                  href="https://www.suny.edu/campuses/suffolk/"
                  alt="Suffolk County Community College"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </Col>
              <Col xs={6} md={4}>
                <p>
                  Associate of Science (AS) in Business Administration and
                  Management
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </article>
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);

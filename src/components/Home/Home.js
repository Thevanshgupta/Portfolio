import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePhoto from "../../Assets/profile-photo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vansh Gupta</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{ 
                width: '300px', 
                height: '300px', 
                borderRadius: '50%', 
                overflow: 'hidden',
                border: '5px solid #c770f0',
                boxShadow: '0 0 20px rgba(199, 112, 240, 0.5)',
                margin: '0 auto'
              }}>
                <img
                  src={profilePhoto}
                  alt="Vansh Gupta"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <div className="home-social-links">
              <a
                href="https://github.com/Thevanshgupta"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/thevanshgupta/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/the_vanshgupta"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:Vansh3813.1@gmail.com"
                className="icon-colour home-social-icons"
                title="Email"
              >
                <FiMail />
              </a>
              <a
                href="tel:+916006232149"
                className="icon-colour home-social-icons"
                title="Call"
              >
                <FiPhone />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

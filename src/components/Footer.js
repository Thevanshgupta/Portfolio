import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vansh Gupta</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright {year} VG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <div className="footer-links">
            <a
              href="https://github.com/Thevanshgupta"
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaGithub /> GitHub
            </a>
            <span className="separator">|</span>
            <a
              href="https://www.linkedin.com/in/thevanshgupta/"
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
            <span className="separator">|</span>
            <a
              href="https://x.com/the_vanshgupta"
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaTwitter /> Twitter
            </a>
            <span className="separator">|</span>
            <a
              href="mailto:Vansh3813.1@gmail.com"
              className="footer-link"
            >
              <FiMail /> Vansh3813.1@gmail.com
            </a>
            <span className="separator">|</span>
            <a
              href="tel:+916005232149"
              className="footer-link"
            >
              <FiPhone /> +91 600 523 2149
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

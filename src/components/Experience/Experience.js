import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode, FaChartLine } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
        
        {/* KPMG Experience */}
        <Row className="experience-item">
          <Col md={2} className="experience-icon">
            <FaChartLine className="icon" />
          </Col>
          <Col md={10}>
            <h3>Product Management Intern</h3>
            <h4>KPMG</h4>
            <h5>Aug 2025 – Present</h5>
            <ul>
              <li>Collaborated with cross-functional teams to optimize analytics workflows, improving efficiency by 20%</li>
              <li>Analyzed datasets to identify gaps and proposed actionable product enhancements adopted across teams</li>
              <li>Oversaw full product lifecycle, from requirement gathering to deployment of automation pipelines</li>
              <li>Streamlined reporting and dashboards, enhancing data-informed decision-making across departments</li>
            </ul>
          </Col>
        </Row>

        {/* CRIE MIET Experience */}
        <Row className="experience-item">
          <Col md={2} className="experience-icon">
            <FaLaptopCode className="icon" />
          </Col>
          <Col md={10}>
            <h3>SDE Intern (Director's Intern)</h3>
            <h4>CRIE MIET, Jammu</h4>
            <h5>Apr 2024 – Jul 2025</h5>
            <ul>
              <li>Selected as top 1% of 400+ students for a prestigious Director-level internship</li>
              <li>Enhanced Chat-Pi360 AI chatbot and Pi360 Mobile App, improving campus automation and engagement</li>
              <li>Built backend automation scripts and APIs, optimizing operational task efficiency by 25%</li>
              <li>Created a RAG-based SQL Generator with sliding window protocol, expanding query accuracy by 40%</li>
              <li>Applied modular design, file handling, API integration, and end-to-end product delivery</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

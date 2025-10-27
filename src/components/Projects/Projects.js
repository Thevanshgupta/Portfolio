import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Chat-Pi360: Conversational AI Chatbot"
              description="• Constructed AI chatbot using LLaMA 4 and Retrieval-Augmented Generation (RAG)
              • Integrated sliding window protocols and secure APIs, improving context accuracy by 40%
              • Applied full-stack solution using Python, Flask, and React for real-time interactions"
              ghLink="https://github.com/Thevanshgupta/pi360-llm-deploy.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="GST Filing & Compliance Platform"
              description="• Designed enterprise GST platform covering GSTR-1 to GSTR-9 forms and amendments
              • Built backend APIs and automation pipelines using Python, SQL, Flask, improving efficiency by 30%
              • Integrated RAG for intelligent query handling and real-time compliance support"
              ghLink="https://github.com/Thevanshgupta/KPMG_Regular_Script.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Blockchain-Based Voting System"
              description="• Created decentralized election platform using Ethereum, Solidity, and Web3.js
              • Implemented real-time identity verification and immutable audit logs, enhancing security and trust
              • Enabled transparent, tamper-proof voting with blockchain smart contracts"
              ghLink="https://github.com/Thevanshgupta/blockchain-votingsystem.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="On-Device Semantic Segmentation for WMS"
              description="• Constructed real-time geospatial processing modules using TensorFlow Lite and OpenCV
              • Optimized for mobile GPU/NPU acceleration, enabling real-time offline analysis
              • Applied interactive visualization tools and offline export for field operations"
              ghLink="https://github.com/Thevanshgupta/semantic-segmentation-of-WMS-services.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Blood Bank Management System"
              description="• Engineered a comprehensive system for donor registrations and blood inventory management
              • Implemented JWT authentication for secure user access and data protection
              • Built with MySQL for database management and HTML/CSS for frontend interface
              • Achieved 20% faster response time for urgent blood requirements"
              ghLink="https://github.com/Thevanshgupta/Blood_Bank.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

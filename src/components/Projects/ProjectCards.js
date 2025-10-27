import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsCodeSlash } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-header">
        <div className="project-icon">
          <BsCodeSlash size={40} />
        </div>
        <Card.Title className="project-title">{props.title}</Card.Title>
      </div>
      <Card.Body>
        <Card.Text style={{ textAlign: "left" }} className="project-description">
          {props.description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </Card.Text>
        <div className="project-buttons">
          {props.ghLink && (
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
              className="project-button"
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "View Code"}
            </Button>
          )}
          
          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-primary"
              href={props.demoLink}
              target="_blank"
              className="project-button"
            >
              <CgWebsite /> &nbsp;
              {"Live Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
// Add some custom styles for the project cards
const styles = `
  .project-card-view {
    height: 100%;
    padding: 1rem;
    color: #000;
    background-color: #f8f9fa !important;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .project-card-view:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .project-card-header {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .project-icon {
    background: #6c63ff;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: white;
  }
  
  .project-title {
    color: #6c63ff;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .project-description {
    color: #6c757d;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .project-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .project-button {
    border-radius: 20px;
    padding: 0.5rem 1.25rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .project-button:hover {
    transform: translateY(-2px);
  }
`;

// Add styles to the document head
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

export default ProjectCards;

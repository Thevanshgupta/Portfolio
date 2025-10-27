import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Vansh Gupta</span>, a <span className="purple">Full Stack Developer</span> passionate about building intelligent, high-performance software products.
            <br />
            <br />
            I'm currently pursuing my <span className="purple">B.Tech in Computer Science</span> at <span className="purple">Model Institute of Engineering and Technology (Autonomous), Jammu</span> (2022-2026).
            <br />
            <br />
            With experience in <span className="purple">AI, Machine Learning, and Cloud Computing</span>, I've developed applications using <span className="purple">Python, Flask, React, and RESTful APIs</span>, working with databases like <span className="purple">MySQL, PostgreSQL, and MongoDB</span> on <span className="purple">Google Cloud, IBM Cloud, and AWS</span>.
            <br />
            <br />
            <strong>Technical Skills:</strong>
            <ul style={{ marginTop: '10px' }}>
              <li><span className="purple">Languages:</span> Python, C++, SQL, JavaScript, HTML/CSS</li>
              <li><span className="purple">Frameworks:</span> Flask, Django, TensorFlow, PyTorch, React</li>
              <li><span className="purple">Cloud & DevOps:</span> AWS, GCP, Git, GitHub, Docker</li>
              <li><span className="purple">Databases:</span> MySQL, PostgreSQL, MongoDB, Firebase</li>
            </ul>
            <br />
            When I'm not coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

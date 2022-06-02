import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Leaf from "../../Assets/Projects/img20.jpeg";
import Dog from "../../Assets/Projects/img2.jpeg";
import Cat from "../../Assets/Projects/img21.jpeg";
import Mouse from "../../Assets/Projects/img23.jpeg";
import Lion from "../../Assets/Projects/img24.jpeg";
import Rhino from "../../Assets/Projects/img27.jpeg";
import Dinosaur from "../../Assets/Projects/img11.jpeg";
import Monkey from "../../Assets/Projects/img12.jpeg";
import Rat from "../../Assets/Projects/img18.jpeg";
import Hippo from "../../Assets/Projects/img14.jpeg";
import Elephant from "../../Assets/Projects/img28.jpeg";
import Eagle from "../../Assets/Projects/img29.jpeg";
import Giraffe from "../../Assets/Projects/img7.jpeg";
import Sixnine from "../../Assets/Projects/img22.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", justifyContent: "center" }}>
          Here are a few tattoos I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Leaf}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dog}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cat}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Giraffe}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lion}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rhino}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dinosaur}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rat}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Monkey}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hippo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sixnine}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mouse}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

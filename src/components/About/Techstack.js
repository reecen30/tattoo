import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import img1 from "./icons/a.png";
import img2 from "./icons/b.png";
import img3 from "./icons/c.png";
import img4 from "./icons/d.png";
import img5 from "./icons/e.png";
import img6 from "./icons/f.png";
import img7 from "./icons/g.png";
import img8 from "./icons/h.png";
import img9 from "./icons/i.png";
import "./stackoftech.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons tattoo">
        <img src={img1} width="130" height="130"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons tattoo">
      <img src={img2} width="130" height="130"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons tattoo">
      <img src={img3} width="130" height="130"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons tattoo">
      <img src={img4} width="130" height="130"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons tattoo">
      <img src={img5} width="130" height="130"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons tattoo">
      <img src={img6} width="130" height="130" />
      </Col>
      <Col xs={4} md={2} className="tech-icons tattoo">
      <img src={img7} width="130" height="130" />
      </Col>
      <Col xs={4} md={2} className="tech-icons tattoo">
      <img src={img8} width="130" height="130" />
      </Col>
      <Col xs={4} md={2} className="tech-icons tattoo">
      <img src={img9} width="130" height="130" />
      </Col>
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ink3.png";
import { ImPointRight } from "react-icons/im";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INFORMATION </span> 
            </h1>
            <br/>
            <ul>
            <li className="about-activity">
              <ImPointRight /> We accept cash or card payments.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> If you are not happy with your design, certain changes can be made on the spot, otherwise we’ll reschedule your appointment if major changes are needed.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> You need to be clear about what you want from the start. Please avoid changing your ideas at the last minute. You may lose your booking and we will have to reschedule your appointment.
            </li>
          </ul>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
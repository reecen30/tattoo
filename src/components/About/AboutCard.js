import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Ruthless Ink is situated in Phoenix in the heart of Durban, South Africa. 
          Ruthless Ink offers custom tattooing in a <span className = "purple">clean, sterile environment</span> while keeping it fun & relaxed. 
          Our studio is home to the most <span className = "purple">experienced tattooer </span>in Durban, with frequent visits from customers. 
          
            <br />
            <br />
            Ruthless Ink covers most tattoo styles and always offer honest <span className = "purple">advice</span> and <span className = "purple">guidance </span>to make your tattoo unique and personal.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Walk-ins and consultations welcome.
            </li>
            <li className="about-activity">
              <ImPointRight /> Persons under the age of 18 are not allowed to get tattooed.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "“Your body is my journal, and your tattoos are my story.”"{" "}
          </p>
          <footer className="blockquote-footer">Sion</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Juan Martin Saravia </span>
            from <span className="purple"> Salta, Argentina.</span>
            <br /> I am a frontend developer, I have been working with frontend technologies for two years, for small and medium-sized businesses. Building your websites, some static some interactive.
            <br />
            Additionally, I am currently developing for my own marketing agency. at
            Sofactory.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poetry and Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Train In The Gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Persevere and succeed!{" "}
          </p>
          <footer className="blockquote-footer">Juan Martin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

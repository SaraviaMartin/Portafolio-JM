import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatpdf from "../../Assets/Projects/chatpdf.png"
import shoppingCart from "../../Assets/Projects/shoppingCart.png"
import sofactory from "../../Assets/Projects/sofactory.png"
import movieSearch from "../../Assets/Projects/movieSearch.png"
import electromechanical from "../../Assets/Projects/electromechanical.png"
import resumeOnline from "../../Assets/Projects/resumeOnline.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatpdf}
              isBlog={false}
              title="ChatPDF"
              description="Chatpdf is an application created with Nextjs, Typescript, Clerk, NeonDB, DrizzleORM, Tailwind and OpenaiAPI, and deployed on Vercel. You can place your pdf files and chat with the interpreter."
              ghLink="https://github.com/SaraviaMartin/chatpdf-jm"
              demoLink="https://chatpdf-jm.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCart}
              isBlog={false}
              title="Shopping Cart"
              description="Shopping cart made with React, HTML, and CSS. Shows a list of products, filters by price and by category. In the shopping cart you can add products, remove them, modify their quantity and the changes are synchronized with the list."
              ghLink="https://github.com/SaraviaMartin/Shopping-cart"
              demoLink="https://shopping-cart-lyart-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sofactory}
              isBlog={false}
              title="Sofactory"
              description="Sofactory is the page of a marketing agency. It is made with React, NextJS and Tailwind. You have to register, log in and also a form."
              ghLink="https://github.com/SaraviaMartin/react-sofactory"
              demoLink="https://react-sofactory.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieSearch}
              isBlog={false}
              title="Movie Search"
              description="The movie search engine is made with React, HTML, CSS. And the API of: https://www.omdbapi.com/. It has a form to filter movies by year. It also performs the search when typing."
              ghLink="https://github.com/SaraviaMartin/Buscador-de-peliculas-React.git"
              demoLink="https://buscador-de-peliculas-react-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electromechanical}
              isBlog={false}
              title="Electromechanical 2044"
              description="Electromecanical 2044 is an automotive metallurgical company. Their website is a simple verification site, made with HTML, CSS and Javascript. With a form to receive inquiries."
              ghLink="https://github.com/SaraviaMartin/20.44.git"
              demoLink="https://2044electromecanica.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeOnline}
              isBlog={false}
              title="Resume Online"
              description="The Online CV Template. Simple, with Javascript and Tailwind.."
              ghLink="https://github.com/SaraviaMartin/Universal-Resume.git"
              demoLink="https://resume-juan-martin-2023.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

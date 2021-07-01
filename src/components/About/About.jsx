import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import "./about.css";
import { Fade, Zoom } from "react-reveal";
import "react-circular-progressbar/dist/styles.css";


const Mypic = "/images/picture.JPG"

function About() {
  return (
    <section className="about py-4" id="about">
      <Container className="py-3 text-right">
        <Row>
          <Col lg={6}>
            <div className="about__picture">
              <Fade left>
                <Image width="300" src={Mypic} fluid />
              </Fade>
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col className="py-sm-4">
                <Fade right>
                  <h3 className="about__title">About Me</h3>
                  <p>
                    Hi , I'm Taro Abdoul Aziz from Niger, Currently I live in
                    Abu Dhabi ( UAE ). I'm interested and passionate about
                    coding, music and video games, I am Full-StackJS developer,
                    I use ReactJS, Redux, NodeJS, MongoDB and MySQL technology
                  </p>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Fade right>
                  <h3 className="about__title">Contact Details</h3>
                  <p>Taro Abdoul Aziz</p>
                  <p>Abu Dhabi - AUE</p>
                  <p>(+971) 052-465-5728</p>
                  <p>aztaro97@gmail.com</p>
                </Fade>
              </Col>
              <Col lg={6}>
                <Zoom>
                  <a href="/docs/cv.pdf" className="about_link btn">
                    <FaDownload className="mx-1" /> Download Resume
                  </a>
                </Zoom>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

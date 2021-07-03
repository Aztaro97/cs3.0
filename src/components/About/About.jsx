import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import "./about.css";
import { Fade, Zoom } from "react-reveal";
import "react-circular-progressbar/dist/styles.css";

const Mypic = "/images/picture.JPG";

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
                    Passionate about new technologies since my youngest age,
                    Graduated in computer science, and having visited school 42AbuDhabi
                    (computer school), but also self-taught. I like to browse
                    everywhere on the internet (forums, online courses, youtube
                    ... etc) in order to arouse my curiosity and at the same
                    time satisfy it.
                  </p>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Fade right>
                  <h3 className="about__title">Contact Details</h3>
                  <p>Taro Abdoul Aziz</p>
                  <p>Abu Dhabi - UAE</p>
                  <p>(+971) 052 465 5728</p>
                  <p>aztaro97@gmail.com</p>
                </Fade>
              </Col>
              <Col lg={6}>
                <Zoom>
                  <a href="https://drive.google.com/file/d/1v9aY1EjzGmyM24vWFPbfIDAXbHNcoEY2/view?usp=sharing" className="about_link btn">
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

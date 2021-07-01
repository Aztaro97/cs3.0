import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import {Fade} from "react-reveal"
import "./portfolio.css";
import {AiOutlineLink} from "react-icons/ai"


function Portfolio() {
  return (
    <section className="portfolio py-4" id="portfolio">
      <Container>
        <Row>
          <Col>
            <h3 className="portfolio__header">My PortFolio</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} sm={12} className="px-0">
            <Fade left>
            <div className="portfolio__thumb" onClick={() => window.open("https://goalketafrica.com/", "_blank")}>
              <Image src="/images/portfolio-img1.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  GoalKet Africa</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade right>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/shoppingcart/", "_blank")}>
              <Image src="/images/shopping.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Shopping Cart</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade left>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/niebephone/index.html", "_blank")}>
              <Image src="/images/niebephone.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  NiebePhone</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade right>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/moietmoi/", "_blank")}>
              <Image src="/images/moietmoi.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Moi et Moi</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade left>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/adminboard/", "_blank")}>
              <Image src="/images/admindashbord.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Admin Dashboard</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade right>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/gizogizo/", "_blank")}>
              <Image src="/images/gizogizo.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Gizo Gizo</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade left>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/maison/", "_blank")}>
              <Image src="/images/maison.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  House Location</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade right>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/projet-facebook/", "_blank")}>
              <Image src="/images/facebook.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Facebook clone</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade left>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/google/", "_blank")}>
              <Image src="/images/google.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Google clone</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade right>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/karanta/", "_blank")}>
              <Image src="/images/karanta.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Karanta</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade left>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/fadatech/", "_blank")}>
              <Image src="/images/fadatech.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  FadaTech</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade right>
            <div className="portfolio__thumb" onClick={() => window.open("https://timer-app-97.netlify.app/", "_blank")}>
              <Image src="/images/timerapp.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Timer App</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade left>
            <div className="portfolio__thumb" onClick={() => window.open("https://carbone-emission.herokuapp.com/", "_blank")}>
              <Image src="/images/carbonne.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Carbon Emission</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade right>
            <div className="portfolio__thumb" onClick={() => window.open("https://aztaro97.github.io/lokaci/", "_blank")}>
              <Image src="/images/horloge.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Horloge</h3>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={6} sm={12} className="px-0">
          <Fade left>
            <div className="portfolio__thumb" onClick={() => window.open("https://youtube-clonet.herokuapp.com/", "_blank")}>
              <Image src="/images/youtube.png" fluid />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">
                  <AiOutlineLink />
                  Youtube Clone</h3>
              </div>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;

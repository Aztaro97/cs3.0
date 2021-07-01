import React from "react";
import { Container } from "react-bootstrap";
import Typist from "react-typist";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/all";
import {Zoom} from "react-reveal"

function Banner() {
  return (
    <div className="banner" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        alignContent:"center",
        height:"100%"
      }}>
    <Container>
      <Typist className="text-center">
        <span className="banner__title">Hi, I'm Taro Abdoul Aziz .</span>
        <br />
      </Typist>
      <Zoom left>
        <p className="text-center">FullStack Developer</p>
      </Zoom>
      <br />
      <Zoom>
      <ul className="banner__social">
          <li>
              <a href="https://m.facebook.com/aztaro97" target="_blank" rel="noreferrer">
                  <FaFacebookF size={30} />
              </a>
          </li>
          <li>
              <a href="https://twitter.com/aztaro97" target="_blank" rel="noreferrer">
                  <FaTwitter size={30} />
              </a>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/taro-abdoul-aziz-1340621a1" target="_blank" rel="noreferrer">
                  <FaLinkedinIn size={30} />
              </a>
          </li>
          <li>
              <a href="https://www.instagram.com/aztaro97/" target="_blank" rel="noreferrer">
                  <FaInstagram size={30} />
              </a>
          </li>
          <li>
              <a href="https://github.com/Aztaro97" target="_blank" rel="noreferrer">
                  <FaGithub size={30} />
              </a>
          </li>
      </ul>
      </Zoom>
    </Container>
    
    </div>
  );
}

export default Banner;

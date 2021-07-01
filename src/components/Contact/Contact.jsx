import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Fade } from "react-reveal";
import {Row, Col, Container} from "react-bootstrap"
import { MdLocalPhone, AiOutlineMail, GiPositionMarker } from "react-icons/all";
import "./contact.css";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (value) => {
      const body = JSON.stringify(value, null, 2);
      axios
        .post("/api/form", body)
        .then((res) => {
          console.log("Message envoyer");
        })
        .catch((err) => {
          console.log("Non envoyer");
        });
    },
  });
  return (
    <section className="contact py-4" id="contact">
     <Container>
     <div className="contact__title">
        <h3>Contact Us</h3>
      </div>
      <Row className="content">
        <Col>
        <div className="contactInfo">
          <Fade left>
            <h3>Contact Info</h3>
            <div className="contactInfoBx">
              <div className="box">
                <div className="icon">
                  <GiPositionMarker />
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>
                  Abu Dhabi - AUE
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <MdLocalPhone />
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>(+971) 052-465-5728</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <AiOutlineMail />
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>aztaro97@gmail.com</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        </Col>
        <Col>
        <div className="formBx">
          <form
            method="POST"
            action=""
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <Fade right>
              <h3>Message Me</h3>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>
              <input type="submit" value="Send" name="" />
            </Fade>
          </form>
        </div>
        </Col>
      </Row>
     </Container>
    </section>
  );
}

export default Contact;

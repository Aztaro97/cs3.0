import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./skill.css";
import { Zoom } from "react-reveal";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const html_css_pic = "/images/html_css.png";
const js_pic = "/images/javascript.png";
const bt_pic = "/images/bootstrap.png";
const react_pic = "/images/react.png";
const redux_pic = "/images/redux.png";
const node_pic = "/images/node.png";
const mongo_pic = "/images/mongo.png";
const git_pic = "/images/git.png";
const wp_pic = "/images/wp.png";
const mysql_pic = "/images/mysql.png";



function skill() {
  return (
    <div className="skill py-4" id="skill">
      <Container>
        <h3 className="text-center my-4">MY SKILL</h3>
        <Row>
          <Col lg={3} md={4} sm={3}>
            
              <div className="skill__progressbar">
              <Zoom>
                <CircularProgressbarWithChildren
                  value={80}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#3E98C7",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={html_css_pic}
                    alt="JavaScript"
                  />
                  <div className="skill_progress_title">
                    <strong>HTML/CSS</strong>
                  </div>
                </CircularProgressbarWithChildren>
            </Zoom>

              </div>
          </Col>
          <Col lg={3} md={4} sm={3}>
              <div className="skill__progressbar">
            <Zoom>

                <CircularProgressbarWithChildren
                  value={70}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#F2C742",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={js_pic}
                    alt="JavaScript"
                  />
                  <div className="skill_progress_title">
                    <strong>JavaScript</strong>
                  </div>
                </CircularProgressbarWithChildren>
            </Zoom>

              </div>
          </Col>
          <Col lg={3} md={4} sm={3}>
            <Zoom>
              <div className="skill__progressbar">
                <CircularProgressbarWithChildren
                  value={80}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#850AFA",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={bt_pic}
                    alt="Bootstrap"
                  />
                  <div className="skill_progress_title">
                    <strong>Bootstrap</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Zoom>
          </Col>
          <Col lg={3} md={4} sm={3}>
            <Zoom>
              <div className="skill__progressbar">
                <CircularProgressbarWithChildren
                  value={70}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#4AD5FF",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={react_pic}
                    alt="ReactJS"
                  />
                  <div className="skill_progress_title">
                    <strong>ReactJS</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Zoom>
          </Col>
          <Col lg={3} md={4} sm={3}>
            <Zoom>
              <div className="skill__progressbar">
                <CircularProgressbarWithChildren
                  value={65}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#764ABC",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={redux_pic}
                    alt="Redux"
                  />
                  <div className="skill_progress_title">
                    <strong>Redux</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Zoom>
          </Col>
          <Col lg={3} md={4} sm={3}>
            <Zoom>
              <div className="skill__progressbar">
                <CircularProgressbarWithChildren
                  value={60}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#7FC728",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={node_pic}
                    alt="NodeJS"
                  />
                  <div className="skill_progress_title">
                    <strong>NodeJS</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Zoom>
          </Col>
          <Col lg={3} md={4} sm={3}>
            <Zoom>
              <div className="skill__progressbar">
                <CircularProgressbarWithChildren
                  value={55}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#4DA83E",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={mongo_pic}
                    alt="MongoDB"
                  />
                  <div className="skill_progress_title">
                    <strong>MongoDB</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Zoom>
          </Col>
          <Col lg={3} md={4} sm={3}>
            <Zoom>
              <div className="skill__progressbar">
                <CircularProgressbarWithChildren
                  value={65}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#181616",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={git_pic}
                    alt="GitHub"
                  />
                  <div className="skill_progress_title">
                    <strong>GitHub</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Zoom>
          </Col>
          <Col lg={3} md={4} sm={3}>
            <Zoom>
              <div className="skill__progressbar">
                <CircularProgressbarWithChildren
                  value={67}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#0087BE",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={wp_pic}
                    alt="WordPress"
                  />
                  <div className="skill_progress_title">
                    <strong>WordPress</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Zoom>
          </Col>
          <Col lg={3} md={4} sm={3}>
            <Zoom>
              <div className="skill__progressbar">
                <CircularProgressbarWithChildren
                  value={50}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: "#309FE2",
                  })}
                >
                  <Image
                    className="skill_progress_img"
                    src={mysql_pic}
                    alt="MySQL"
                  />
                  <div className="skill_progress_title">
                    <strong>MySQL</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default skill;

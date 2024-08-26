import React from "react";
import { Jumbotron, Container, Button, Row, Col } from "reactstrap"; //Jumbotron is deprecated, Container, Button are the componnets of bootstrap
// import img from '../Images/morpankh.jpg';
import "./Home.css";
import reactlogo from "../Images/reactlogo.png";
import mysqllogo from "../Images/mysqllogo.png";
import springbootlogo from "../Images/springbootlogo.png";
import hibernatelogo from "../Images/hibernatelogo.png";

function Home() {
  return (
    <div className="text-center mb-3 homebg">
      <h1 id="heading">My Courses</h1>
      <p id="para">
        This project is a web application for managing courses. It allows users
        to view, add, update, and delete courses. The application has a login
        and registration system, and it provides a user-friendly interface for
        interacting with the course data.
        <br />
        <br />
        <Row>
          <Col md={3}>
            <div>
              <img src={reactlogo} className=" imgdivreact" />
            </div>
          </Col>

          <Col md={3}>
            <div>
              <img src={springbootlogo} className="imgdiv" />
            </div>
          </Col>

          <Col md={3}>
            <div>
              <img src={mysqllogo} className="imgdiv" />
            </div>
          </Col>

          <Col md={3}>
            <div>
              <img src={hibernatelogo} className="imgdiv" />
            </div>
          </Col>
        </Row>
      </p>

      <Container>
        <Button color="primary outline mb-4 ">Start Using</Button>
      </Container>
    </div>
  );
}

export default Home;

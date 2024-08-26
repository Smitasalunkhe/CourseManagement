import React, { useState, useEffect } from "react";
import axios from "axios";
import base_url from "./api";
import Course from "./Course";
import { Row, Col } from "reactstrap";

function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All courses || Smita Salunkhe";
    getAllCoursesFromServer();
  }, []);

  // Function to call the server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // Success
        console.log(response.data);
        setCourses(response.data); // Update the state with fetched data
      },
      (error) => {
        // For error
        console.log(error);
      }
    );
  };

  return (
    <div>
      <h1 className="text-secondary">All Courses</h1>
      <p className="text-secondary">List of courses are as follows:</p>
      <Row>
        {courses.length > 0
          ? courses.map((item) => (
              <Col sm="6" md="4" key={item.id} style={{ marginBottom: "20px" }}>
                <Course course={item} update={getAllCoursesFromServer} />
              </Col>
            ))
          : "No Courses Available"}
      </Row>
    </div>
  );
}

export default AllCourses;

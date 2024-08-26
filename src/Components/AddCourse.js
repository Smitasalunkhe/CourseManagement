import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import "./AddCourse.css";

function AddCourse() {
  useEffect(() => {
    document.title = "Add Course || Smita Salunkhe";
  }, []);

  const [course, setCourse] = useState({
    title: "",
    description: "",
  });

  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };

  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  return (
    <>
      <h1 className="text-center" id="h1">
        Fill Course Details
      </h1>

      <div className="addForm p-4">
        <Form onSubmit={handleForm} className="Form">
          <FormGroup>
            <label for="title" id="courseLabel">
              Course title
            </label>
            <Input
              type="text"
              id="title"
              placeholder="Enter Title here"
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <label for="description" id="courseLabel">
              Course Description
            </label>
            <Input
              type="textarea"
              id="description"
              placeholder="Enter description here"
              style={{ height: 150 }}
              onChange={(e) => {
                setCourse({ ...course, description: e.target.value });
              }}
            />
          </FormGroup>

          <Container>
            <Button type="submit" color="success">
              Add Course
            </Button>
            <Button color="secondary" className="m-2">
              Clear
            </Button>
          </Container>
        </Form>
      </div>
    </>
  );
}

export default AddCourse;

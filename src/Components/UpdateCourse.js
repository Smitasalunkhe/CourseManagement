import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Container } from "reactstrap";
import axios from "axios";
import base_url from "./api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateCourse() {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${base_url}/courses/${id}`).then(
      (response) => {
        setCourse(response.data);
      },
      (error) => {
        toast.error("Failed to fetch course details");
      }
    );
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();
    axios.put(`${base_url}/courses`, course).then(
      (response) => {
        toast.success("Course updated successfully");
        navigate("/view-courses"); // Navigate to courses list after update
      },
      (error) => {
        toast.error("Failed to update course");
      }
    );
  };

  return (
    <div>
      <h1 className="text-center">Update Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="courseId">Course Id</label>
          <Input type="text" id="courseId" value={course.id || ""} readOnly />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            id="title"
            placeholder="Enter Title here"
            value={course.title || ""}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            id="description"
            placeholder="Enter description here"
            style={{ height: 150 }}
            value={course.description || ""}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </FormGroup>
        <Container>
          <Button type="submit" color="success">
            Update Course
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default UpdateCourse;

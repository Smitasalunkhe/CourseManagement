import axios from "axios";
import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import base_url from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Course = ({ course, update }) => {
  const navigate = useNavigate();

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course deleted successfully");
        update(); // Update the list after deletion
      },
      (error) => {
        toast.error("Failed to delete course");
      }
    );
  };

  return (
    <Card className="text-center" style={{ width: "100%" }}>
      <CardBody>
        <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container>
          <Button color="danger" onClick={() => deleteCourse(course.id)}>
            Delete
          </Button>
          <Button
            color="warning m-2"
            onClick={() => navigate(`/update-course/${course.id}`)}
          >
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;

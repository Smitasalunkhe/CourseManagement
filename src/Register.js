import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function Register({ onRegister }) {
  const [uname, setUname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const userData = {
      uname,
      dob,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    onRegister();
  };

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="email">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">DOB</Label>
          <Input
            type="date"
            name="dob"
            id="dob"
            placeholder="Enter your DOB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" onClick={handleRegister}>
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;

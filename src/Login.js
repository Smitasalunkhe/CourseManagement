import React, { useState } from "react";
import "./Login.css";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container1">
      <Row>
        {/* <Col md={4}>
          <div className="loginSideImg"></div>

          <div className="cover absolute"></div>
        </Col> */}

        <Col md={6}>
          <div className="formside">
            <form>
              <h1 id="heading">Welcome Back...!</h1>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label pt-2">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control inp"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control inp"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary col-md-12 mb-2"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import "./App.css";
import { Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AllCourses from "./Components/AllCourses";
import AddCourse from "./Components/AddCourse";
import Menu from "./Components/Menu";
import Login from "./Login";
import Register from "./Register";
import UpdateCourse from "./Components/UpdateCourse";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsRegistered(true);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    toast("Login successful", {
      position: "top-center",
    });
  };

  const handleRegister = () => {
    setIsRegistered(true);
    toast("Registration successful", {
      position: "top-center",
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsRegistered(false);
    localStorage.removeItem("user");
    toast("Logout successful", {
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        {isAuthenticated ? (
          <div className="container-fluid">
            <Row>
              <Col md={3} className="sidemenu">
                <Menu />
              </Col>
              <Col md={9} className="contentArea">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add-course" element={<AddCourse />} />
                  <Route path="/view-courses" element={<AllCourses />} />
                  <Route path="/update-course/:id" element={<UpdateCourse />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Col>
            </Row>
          </div>
        ) : (
          <Routes>
            {!isRegistered ? (
              <Route
                path="/"
                element={<Register onRegister={handleRegister} />}
              />
            ) : (
              <Route path="/" element={<Login onLogin={handleLogin} />} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

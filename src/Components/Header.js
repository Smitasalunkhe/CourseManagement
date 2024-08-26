import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" id="mainheading">
          Course Management
        </NavbarBrand>
        <Nav className="ml-auto p-4" navbar>
          {isAuthenticated ? (
            <NavItem>
              <Button color="danger" onClick={handleLogout}>
                Logout
              </Button>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/register">
                  Register
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;

import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Your Gateway to Unforgettable Travels
              </p>
              <div className="gap-4 social_links d-flex align-items-center">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Discover</h5>

            <ListGroup className="footer_quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Quick Links</h5>

            <ListGroup className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Contact</h5>

            <ListGroup className="footer_quick-links">
              <ListGroupItem className="gap-3 border-0 ps-0 d-flex align-items-center">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-fill"></i>
                  </span>
                  Address
                </h6>

                <p className="mb-0">Colombo, Sri Lanka</p>
              </ListGroupItem>
              <ListGroupItem className="gap-3 border-0 ps-0 d-flex align-items-center">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                  <i className="ri-mail-fill"></i>
                  </span>
                 Email;;;;
                </h6>

                <p className="mb-0 ">info@sanchare.com</p>
              </ListGroupItem>
              <ListGroupItem className="gap-3 border-0 ps-0 d-flex align-items-center">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                  <i className="ri-phone-fill"></i>
                  </span>
                  Phone::
                </h6>

                <p className="mb-0">+941122565</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className="pt-5 text-center">
            <p className="copyright">&copy; {year} All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

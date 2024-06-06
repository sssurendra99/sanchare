import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return(
  <section className="newsletter">
    <Container>
      <Row>
        <Col lg="6">
          <div className="newsletter_content">
            <h2>Subscribe now to get useful traveling information</h2>

            <div className="newsletter_input">
              <input type="email" placeholder="Enter your email" />
              <button className="btn newsletter_btn">Subcribe</button>
            </div>
            <p>
            Hear from our satisfied travelers! Discover how Sanchare has helped countless adventurers create unforgettable memories in Sri Lanka. 
            </p>
          </div>
        </Col>
        <Col lg="6">
          <div className="newsletter_img">
            <img src={maleTourist} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default Newsletter;

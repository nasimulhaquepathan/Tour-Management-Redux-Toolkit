import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="footer pt-4">
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col sm={6} md={4}>
            <h5>Tours</h5>
            <ul className="list-unstyled">
              <li>Featured Tours</li>
              <li>New Arrivals</li>
              <li>booking</li>
            </ul>
          </Col>
          <Col sm={6} md={4}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Shipping &amp; Returns</li>
              <li>Customer Service</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <p className="text-center">© {new Date().getFullYear()} Your Ecommerce App. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

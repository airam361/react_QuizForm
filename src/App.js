import React, { useState } from "react";

import Formular from "./components/Formular";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <Container className="col-lg-12 col-md-12 col-sm-10 col-xs-12 mt-3 rounded bg-info bg-gradient bg-opacity-50">
      <Row>
        <div className="text-center fs-2 p-2">Creare Chestionar</div>
      </Row>
      <Row>
        <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12  p-4 ">
          <Formular />
        </Col>
        <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 border border-dark p-4">
          2 of 2
        </Col>
      </Row>
      <Row>
        <div className="text-center p-2">
          <Button variant="primary">Salveaza Chestionarul</Button>
        </div>
      </Row>
    </Container>
  );
};

export default App;

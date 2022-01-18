import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Previzualizare = (props) => {
  const [index, setIndex] = useState(0);

  const inapoiClickHandler = () => {
    setIndex((prevState) =>
      prevState === 0 ? props.chestionar.intrebari.length - 1 : prevState - 1
    );
  };

  const inainteClickHandler = () => {
    setIndex((prevState) =>
      prevState === props.chestionar.intrebari.length - 1 ? 0 : prevState + 1
    );
  };

  const editeazaClickHandler = () => {
    props.editeazaIntrebarea(index);
  };

  return (
    <div className="h-100">
      <h4 className="text-center">Previzualizare Chestionar</h4>
      <div
        className="d-flex h-100 align-items-center"
        style={{ marginTop: "-40px" }}
      >
        <Card className="w-100">
          <Card.Body>
            <Card.Title className="text-center p-2">
              {props.chestionar.titlu}
            </Card.Title>

            <Card className="mb-2">
              <Card.Header>
                {props.chestionar.intrebari[index]?.intrebare}
              </Card.Header>
              <ListGroup as="ol" variant="flush" numbered>
                <ListGroup.Item
                  as="li"
                  variant={
                    props.chestionar.intrebari[index]?.raspuns1 ===
                    props.chestionar.intrebari[index]?.corect
                      ? "success"
                      : ""
                  }
                >
                  {props.chestionar.intrebari[index]?.raspuns1}
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  variant={
                    props.chestionar.intrebari[index]?.raspuns2 ===
                    props.chestionar.intrebari[index]?.corect
                      ? "success"
                      : ""
                  }
                >
                  {props.chestionar.intrebari[index]?.raspuns2}
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  variant={
                    props.chestionar.intrebari[index]?.raspuns3 ===
                    props.chestionar.intrebari[index]?.corect
                      ? "success"
                      : ""
                  }
                >
                  {props.chestionar.intrebari[index]?.raspuns3}
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  variant={
                    props.chestionar.intrebari[index]?.raspuns4 ===
                    props.chestionar.intrebari[index]?.corect
                      ? "success"
                      : ""
                  }
                >
                  {props.chestionar.intrebari[index]?.raspuns4}
                </ListGroup.Item>
              </ListGroup>

              <Card.Text>
                {"Numar ordine: " +
                  props.chestionar.intrebari[index]?.numarOrdine}
              </Card.Text>
            </Card>

            <Row className="mb-2">
              <div className="text-center">
                <Button variant="primary" onClick={editeazaClickHandler}>
                  Editeaza intrebarea
                </Button>
              </div>
            </Row>

            <Row className="row justify-content-between">
              <Col className="col-4">
                <Button variant="outline-primary" onClick={inapoiClickHandler}>
                  Inapoi
                </Button>
              </Col>
              <Col className="col-4 text-end">
                <Button variant="outline-primary" onClick={inainteClickHandler}>
                  Inainte
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Previzualizare;

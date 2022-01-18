import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Formular = (props) => {
  const [validateTitlu, setValidateTitlu] = useState(false);
  const [validateIntrebare, setValidateIntrebare] = useState(false);
  const [numeChestionar, setNumeChestionar] = useState("");
  const [formularIntrebare, setFormularIntrebare] = useState({
    id: "",
    intrebare: "",
    raspuns1: "",
    raspuns2: "",
    raspuns3: "",
    raspuns4: "",
    corect: "",
    numarOrdine: "",
  });

  const reset = () => {
    setValidateIntrebare(false);
    setFormularIntrebare({
      id: "",
      intrebare: "",
      raspuns1: "",
      raspuns2: "",
      raspuns3: "",
      raspuns4: "",
      corect: "",
      numarOrdine: "",
    });
  };

  const changeTitluHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidateTitlu(true);
      return;
    }
    setValidateTitlu(true);
    props.onSaveTitluSiIntrebare(numeChestionar, null);
  };

  const changeIntrebareHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidateIntrebare(true);
      return;
    }
    setValidateIntrebare(true);
    props.onSaveTitluSiIntrebare(null, formularIntrebare);

    reset();
  };

  const intrebareNouaClickHandler = () => {
    //setValidateTitlu(false);
    reset();
  };

  const numeChestionarChangeHandler = (event) => {
    setNumeChestionar(event.target.value);
  };
  const intrebareChangeHandler = (event) => {
    setFormularIntrebare((prevState) => {
      return { ...prevState, intrebare: event.target.value };
    });
  };
  const raspuns1ChangeHandler = (event) => {
    setFormularIntrebare((prevState) => {
      return { ...prevState, raspuns1: event.target.value };
    });
  };
  const raspuns2ChangeHandler = (event) => {
    setFormularIntrebare((prevState) => {
      return { ...prevState, raspuns2: event.target.value };
    });
  };
  const raspuns3ChangeHandler = (event) => {
    setFormularIntrebare((prevState) => {
      return { ...prevState, raspuns3: event.target.value };
    });
  };
  const raspuns4ChangeHandler = (event) => {
    setFormularIntrebare((prevState) => {
      return { ...prevState, raspuns4: event.target.value };
    });
  };
  const corectChangeHandler = (event) => {
    setFormularIntrebare((prevState) => {
      return { ...prevState, corect: event.target.value };
    });
  };
  const numarOrdineChangeHandler = (event) => {
    setFormularIntrebare((prevState) => {
      return { ...prevState, numarOrdine: event.target.value };
    });
  };

  useEffect(() => {
    if (props.indexIntrebareDeEditat >= 0) {
      setFormularIntrebare(
        props.chestionar.intrebari[props.indexIntrebareDeEditat]
      );
    }
  }, [props.indexIntrebareDeEditat]);

  return (
    <>
      <Form noValidate validated={validateTitlu} onSubmit={changeTitluHandler}>
        <Form.Group className="mb-3" controlId="formGroupTitle">
          <Form.Label>Nume Chestionar</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nume chestionar"
            onChange={numeChestionarChangeHandler}
          />
          <Form.Control.Feedback type="invalid">
            Introduce-ti un nume pentru chestionar.
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="row justify-content-between">
          <Col className=" text-end">
            <Button type="submit">Schimba titlu</Button>
          </Col>
        </Row>
      </Form>

      <Form
        noValidate
        validated={validateIntrebare}
        onSubmit={changeIntrebareHandler}
      >
        <div className="mb-5">
          <Form.Label>Formular intrebare</Form.Label>

          <div className="mb-3 ps-3">
            <Form.Group controlId="formBasicInput1">
              <Form.Label>Textul intrebarii</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Intrebarea"
                value={formularIntrebare.intrebare}
                onChange={intrebareChangeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicInput2">
              <Form.Label>Primul raspuns posibil</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Raspuns"
                value={formularIntrebare.raspuns1}
                onChange={raspuns1ChangeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicInput3">
              <Form.Label>Al doilea raspuns posibil</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Raspuns"
                value={formularIntrebare.raspuns2}
                onChange={raspuns2ChangeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicInput4">
              <Form.Label>Al treilea raspuns posibil</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Raspuns"
                value={formularIntrebare.raspuns3}
                onChange={raspuns3ChangeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicInput5">
              <Form.Label>Al patrulea raspuns posibil</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Raspuns"
                value={formularIntrebare.raspuns4}
                onChange={raspuns4ChangeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicInput6">
              <Form.Label>Raspuns corect</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Raspuns corect"
                value={formularIntrebare.corect}
                onChange={corectChangeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicInput7">
              <Form.Label>Numar ordine</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ex: 1"
                value={formularIntrebare.numarOrdine}
                onChange={numarOrdineChangeHandler}
              />
            </Form.Group>
          </div>
        </div>

        <Row className="row justify-content-between">
          <Col className="col-4">
            <Button onClick={intrebareNouaClickHandler}>Intrebare noua</Button>
          </Col>
          <Col className="col-4 text-end">
            <Button type="submit">
              {formularIntrebare.id ? "Salvare Intrebare" : "Adauga intrebare"}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Formular;

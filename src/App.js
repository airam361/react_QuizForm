import React, { useState, useEffect } from "react";

import Formular from "./components/Formular";
import Previzualizare from "./components/Previzualizare";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const App = () => {
  const [chestionar, setChestionar] = useState({ titlu: "", intrebari: [] });
  const [indexIntrebareDeEditat, setIndexIntrebareDeEditat] = useState(); //number

  useEffect(() => {
    if (localStorage.getItem("Chestionar")) {
      setChestionar(JSON.parse(localStorage.getItem("Chestionar")));
    }
  }, []);

  const onSaveTitluSiIntrebareHandler = (titlu, intrebare) => {
    setChestionar((prevState) => {
      const r = { ...prevState };
      if (titlu != null) {
        r.titlu = titlu;
      }

      if (intrebare != null && intrebare.id != "") {
        r.intrebari[intrebare.id - 1] = { ...intrebare };
      } else if (intrebare != null) {
        intrebare.id = r.intrebari.length + 1;
        r.intrebari.push(intrebare);
      }

      return r;
    });
  };

  const salveazaChestionarulClickHandler = () => {
    localStorage.setItem("Chestionar", JSON.stringify(chestionar));
    console.log(chestionar);
  };

  const editeazaIntrebareaHandler = (index) => {
    setIndexIntrebareDeEditat(index);
  };

  return (
    <Container className="col-lg-12 col-md-12 col-sm-10 col-xs-12 mt-3 rounded bg-info bg-gradient bg-opacity-50">
      <Row>
        <div className="text-center fs-2 p-2">Creare Chestionar</div>
      </Row>
      <Row>
        <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4">
          <Formular
            onSaveTitluSiIntrebare={onSaveTitluSiIntrebareHandler}
            indexIntrebareDeEditat={indexIntrebareDeEditat}
            chestionar={chestionar}
          />
        </Col>
        <Col
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4"
          // style={{ wordWrap: "break-word" }}
        >
          {/* {JSON.stringify(chestionar, 2)} */}
          <Previzualizare
            chestionar={chestionar}
            editeazaIntrebarea={editeazaIntrebareaHandler}
          />
        </Col>
      </Row>
      <Row>
        <div className="text-center p-2">
          <Button variant="primary" onClick={salveazaChestionarulClickHandler}>
            Salveaza Chestionarul
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default App;

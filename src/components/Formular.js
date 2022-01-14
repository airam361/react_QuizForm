import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Formular = () => {
  return (
    <Form className="">
      <Form.Group className="mb-5" controlId="formGroupTitle">
        <Form.Label>Nume Chestionar</Form.Label>
        <Form.Control type="text" placeholder="Nume chestionar" />
      </Form.Group>

      <div className="mb-5">
        <Form.Label>Formular intrebare</Form.Label>

        <div className="mb-3 ps-3">
          <Form.Group controlId="formBasicInput1">
            <Form.Label>Textul intrebarii</Form.Label>
            <Form.Control type="text" placeholder="Intrebarea" />
          </Form.Group>

          <Form.Group controlId="formBasicInput2">
            <Form.Label>Primul raspuns posibil</Form.Label>
            <Form.Control type="text" placeholder="Raspuns" />
          </Form.Group>

          <Form.Group controlId="formBasicInput3">
            <Form.Label>Al doilea raspuns posibil</Form.Label>
            <Form.Control type="text" placeholder="Raspuns" />
          </Form.Group>

          <Form.Group controlId="formBasicInput4">
            <Form.Label>Al treilea raspuns posibil</Form.Label>
            <Form.Control type="text" placeholder="Raspuns" />
          </Form.Group>

          <Form.Group controlId="formBasicInput5">
            <Form.Label>Al patrulea raspuns posibil</Form.Label>
            <Form.Control type="text" placeholder="Raspuns" />
          </Form.Group>

          <Form.Group controlId="formBasicInput6">
            <Form.Label>Raspuns corect</Form.Label>
            <Form.Control type="text" placeholder="Raspuns corect" />
          </Form.Group>

          <Form.Group controlId="formBasicInput7">
            <Form.Label>Numar ordine</Form.Label>
            <Form.Control type="text" placeholder="ex: 1" />
          </Form.Group>
        </div>
      </div>

      <Row className="row justify-content-between">
        <Col className="col-4">
          <Button>Intrebare noua</Button>
        </Col>
        <Col className="col-4 text-end">
          <Button>Adauga intrebare</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formular;

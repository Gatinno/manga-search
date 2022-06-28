import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
const InputComponent = ({changeManga}) => {
  return(
    <>
      <Row className="justify-content-center mt-3">
        <Col md={8}>
          <FloatingLabel controlId="search" label="Search">
            <Form.Control type="text" placeholder="Search" onChange={(e)=>{changeManga(e.target.value)}}/>
          </FloatingLabel>
        </Col>
      </Row>
    </>
  );
}
export default InputComponent; 
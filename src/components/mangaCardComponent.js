import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MangaCardComponent = ({id, titleJP, titleEN, image}) => {
  const route = `manga/${id}`
  return (
    <Col xs={6} md={4} lg={2} className="mt-4">
      <Link className="text-decoration-none text-dark" to={route}>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{titleEN??titleJP}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
export default MangaCardComponent; 
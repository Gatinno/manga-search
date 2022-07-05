import useFecth from "../hooks/useFetch";
import { Col, Card } from 'react-bootstrap';
const CharacterComponent  = ({character}) => {
  const {fetchData, loading} = useFecth(character.relationships.character.links.related);
  return (
    <>
    {
      loading ? 
        <Col xs={6} md={4} lg={2} className="my-3">
          <Card>
            <Card.Img variant="top" src={fetchData.data.attributes.image.original??""} alt={fetchData.data.attributes.canonicalName} />
            <Card.Body>
              <Card.Title>{fetchData.data.attributes.canonicalName??""}</Card.Title>
            </Card.Body>
          </Card>
        </Col> :
        ""
    }
    </>
  );
}
export default CharacterComponent
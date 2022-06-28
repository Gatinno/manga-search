import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useFecth from "../hooks/useFetch";
const OPTIONS = {
  methods: 'GET', 
  headers: {
    Accept: 'application/vnd.api+json', 
    'Content-Type': 'application/vnd.api+json'
  }
};
const MangaView = () => {
  const {id} = useParams();
  const URL = `https://kitsu.io/api/edge/manga/${id}`;
  const {fetchData, loading} = useFecth(URL, OPTIONS);
  console.log(fetchData);
  useEffect(()=>{
    document.title = 'MangaApp -'
  },[])
  return (
    <Container className="mt-2" fluid>
      {loading ? 
        <h1>Loading...</h1> :
        <Row>
          <Col>
            <img className="border border-2 border-secondary rounded-3" style={IMGSTYLES} src={fetchData??fetchData.data.attributes.coverImage.original} />
          </Col>
        </Row>
      }
      <Link className="text-decoration-none text-muted" to="/">Back home</Link>
    </Container>
  );
}
export default MangaView;
const IMGSTYLES = {
  height: '500px', 
  width: '400px', 
  objectFit: 'cover',
  objectPosition: '10% 50%'
};
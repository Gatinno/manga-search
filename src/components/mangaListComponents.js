import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useFecth from "../hooks/useFetch";
import MangaCardComponent from "./mangaCardComponent";
const MangaListComponent = ({manga}) => {
  const [url, changeUrl] = useState(`https://kitsu.io/api/edge/manga?filter[text]=${manga}`)
  const {fetchData, loading} = useFecth(url);
  useEffect(()=>{
    changeUrl(`https://kitsu.io/api/edge/manga?page[limit]=18&filter[text]=${manga}`)
  },[manga])
  return (
    <Row className="mt-5">
      {!loading ? 
        <h2>loading...</h2> :
        fetchData.data.length === 0 ?
          <h2>No results</h2> :
          fetchData.data.map(manga=>{
            return (<MangaCardComponent 
              key={manga.id} 
              id={manga.id}
              title={manga.attributes.titles.en??
                manga.attributes.titles.en_jp??
                manga.attributes.titles.en_kr}
              image={manga.attributes.posterImage.small}
            />)
          })
      }
    </Row>
  );
}
export default MangaListComponent;
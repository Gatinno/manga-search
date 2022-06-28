import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import InputComponent from "../components/inputComponent";
import MangaListComponent from "../components/mangaListComponents";
const SearchView = () => {
  const [manga, changeManga] = useState('');
  useEffect(()=>{
    document.title = 'MangaApp - search';
  },[])
  return (
    <Container fluid>
      <h1 className="text-center mt-3">Manga search</h1>
      <InputComponent changeManga={changeManga}/>
      <MangaListComponent manga={manga} />
    </Container>
  );
}
export default SearchView;
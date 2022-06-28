import { useEffect } from "react";
import { useParams } from "react-router-dom";
const MangaView = () => {
  const {id} = useParams();
  console.log(id);
  useEffect(()=>{
    document.title = 'MangaApp -'
  },[])
  return (
    <div>
      <h1>Manga</h1>
    </div>
  );
}
export default MangaView;
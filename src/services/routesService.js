import { Route, Routes } from "react-router-dom";
import MangaView from "../views/mangaView";
import NotFoundView from "../views/notFoundView";
import SearchView from "../views/searchView";

const RoutesService = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchView />}/>
      <Route path="manga">
        <Route path=":id" element={<MangaView />}/>
      </Route>
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}
export default RoutesService;
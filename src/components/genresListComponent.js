import useFecth from "../hooks/useFetch";
import GenreItemComponent from "./genreItemComponent";
const GenresListComponent = ({genres}) => {
    const {fetchData, loading} = useFecth(genres);
    return(
        <ul className="list-group list-group-flush">
            {
                loading ?
                    fetchData.data.map((genre) => <GenreItemComponent key={genre.id} name={genre.attributes.name} />) :
                    <h6>loading...</h6>
            }
        </ul>
    );
}
export default GenresListComponent;
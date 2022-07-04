import useFecth from "../hooks/useFetch";
const CharactersListComponent = ({characters}) => {
    const {fetchData, loading} = useFecth(characters)
    console.log(fetchData)
    return (<>{characters}</>)
}
export default CharactersListComponent;
import CharacterComponent from "./characterComponent";

const CharactersListComponent = ({data, loading}) => {
    return (
        <>
            <h3 className="my-2">Characters: </h3>
            {loading ? 
                data.map((character) => <CharacterComponent key={character.id} character={character} />) :
                'loading...'
            }
        </>
    );
}
export default CharactersListComponent;
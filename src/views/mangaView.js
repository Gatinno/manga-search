import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MangaContentComponent from "../components/mangaContentComponent";
import useFecth from "../hooks/useFetch";
const MangaView = () => {
	const { id } = useParams();
	const URL = `https://kitsu.io/api/edge/manga/${id}`;
	const { fetchData, loading } = useFecth(URL);
	useEffect(() => {
		document.title = `MangaApp - ${loading ? fetchData.data.attributes.titles.en??fetchData.data.attributes.titles.en_jp??fetchData.data.attributes.titles.en_kr: id}`;
	}, [loading]);
	return (
		<Container className='mt-2' fluid>
			<Link className='text-decoration-none text-muted' to='/'>
				Back home
			</Link>
			{loading ? (
				<MangaContentComponent
					poster={fetchData.data.attributes.posterImage.original}
					title={fetchData.data.attributes.titles.en??
						fetchData.data.attributes.titles.en_jp??
						fetchData.data.attributes.titles.en_kr}
					genres={fetchData.data.relationships.genres.links.related}
					startDate={fetchData.data.attributes.startDate}
					status={fetchData.data.attributes.status}
					characters={fetchData.data.relationships.characters.links.related}
				/>
			) : (
				<h1>Loading...</h1>
			)}
		</Container>
	);
};
export default MangaView;

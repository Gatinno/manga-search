import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MangaContentComponent from "../components/mangaContentComponent";
import useFecth from "../hooks/useFetch";
const OPTIONS = {
	methods: "GET",
	headers: {
		Accept: "application/vnd.api+json",
		"Content-Type": "application/vnd.api+json",
	},
};
const MangaView = () => {
	const { id } = useParams();
	const URL = `https://kitsu.io/api/edge/manga/${id}`;
	const { fetchData, loading } = useFecth(URL, OPTIONS);
  console.log(fetchData);
	useEffect(() => {
		document.title = `MangaApp - ${loading ? fetchData.data.attributes.titles.en??fetchData.data.attributes.titles.en_jp: ""}`;
	}, [loading]);
	return (
		<Container className='mt-2' fluid>
			<Link className='text-decoration-none text-muted' to='/'>
				Back home
			</Link>
			{loading ? (
				<MangaContentComponent
					poster={fetchData.data.attributes.posterImage.original}
					titleEN={fetchData.data.attributes.titles.en}
					titleJP={fetchData.data.attributes.titles.en_jp}
				/>
			) : (
				<h1>Loading...</h1>
			)}
		</Container>
	);
};
export default MangaView;

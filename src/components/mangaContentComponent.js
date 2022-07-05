import { Row, Col } from 'react-bootstrap';
import GenresListComponent from './genresListComponent';
import CharactersListComponent from './charactersListComponent';
import useFecth from '../hooks/useFetch';
const MangaContentComponent = ({ poster, title, genres, startDate, status, synopsis, characters }) => {
	const {fetchData, loading} = useFecth(characters);
	return (
		<>
			<Row className='justify-content-evenly'>
				<Col className='text-center mt-2' xs={12} lg={4}>
					<img
						className='border border-2 border-secondary rounded-3'
						style={IMGSTYLES}
						src={poster}
						title={title}
						alt={title}
					/>
				</Col>
				<Col className='mt-2' xs={12} lg={6}>
					<h1 className='border-bottom border-2 border-dark text-center'>
						{title}
					</h1>
					<h4 className='mt-3'>Start Date: {startDate}</h4>
					<h4 className='mt-3'>Status: {status} </h4>
					<h4 className='mt-3'>Genres: </h4>
					<GenresListComponent genres={genres} />
				</Col>
			</Row>
			<Row className="border-top border-dark mt-3">
				<h3 className='my-2'>Synopsis</h3>
				<p>{synopsis}</p>
				<CharactersListComponent data={fetchData.data} loading={loading} />
			</Row>
		</>
	);
};
export default MangaContentComponent;
const IMGSTYLES = {
	height: '500px',
	width: '400px',
	objectFit: 'cover',
	objectPosition: '10% 50%'
};
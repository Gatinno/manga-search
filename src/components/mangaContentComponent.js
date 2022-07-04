import { Row, Col } from 'react-bootstrap';
const MangaContentComponent = ({poster, titleEN, titleJP}) => {
	return (
		<Row className='justify-content-between'>
			<Col className='text-center mt-2' xs={12} lg={4}>
				<img
					className='border border-2 border-secondary rounded-3'
					style={IMGSTYLES}
					src={poster}
					title={titleEN??titleJP}
					alt={titleEN ??titleJP}
				/>
			</Col>
			<Col className='mt-2' xs={12} lg={6}>
				<h1 className='border-bottom border-2 border-dark text-center'>
					{titleEN??titleJP}
				</h1>
			</Col>
		</Row>
	);
};
export default MangaContentComponent;
const IMGSTYLES = {
  height: '500px', 
  width: '400px', 
  objectFit: 'cover',
  objectPosition: '10% 50%'
};
import Container from '../Container';
import CircularProgress from '../CircularProgress';

const CareerGoal = () => {
	return (
		<Container>
			<CircularProgress />
			<div>
				<div>I want to become a</div>
				<div className='h2'>Tax Manager</div>
			</div>
      <div className='body-bold text-accent'>View Insights</div>
		</Container>
	);
};

export default CareerGoal;

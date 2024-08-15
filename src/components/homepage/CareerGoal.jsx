import { useDispatch, useSelector } from "react-redux";
import { fetchCareerGoal } from "../../redux/CareerGoalSlice";
import { useEffect } from "react";

import Container from '../Container';
import CircularProgress from '../CircularProgress';

const CareerGoal = () => {
	const dispatch = useDispatch();
	const careerGoalData = useSelector(state => state.careerGoal);

	useEffect(() => {
		dispatch(fetchCareerGoal());
	}, [dispatch]);

	
	console.log(careerGoalData);

	const careerName = careerGoalData.data?.record?.data[0].name;
	const careerProgress = careerGoalData.data?.record?.data[0].progress;
	return (
		<Container>
			<CircularProgress value={careerProgress} />
			<div>
				<div>I want to become a</div>
				<div className='h2'>{careerName}</div>
			</div>
      <div className='body-bold text-accent'>View Insights</div>
		</Container>
	);
};

export default CareerGoal;

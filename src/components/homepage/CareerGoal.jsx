import { useDispatch, useSelector } from 'react-redux';
import { fetchCareerGoal } from '../../redux/careerGoalSlice';
import { getIndefiniteArticle } from '/src/utils/grammarFormatting.js';
import { useNavigation } from '/src/utils/navigateTo';
import { useEffect } from 'react';

import Container from '../Container';
import CircularProgress from '../CircularProgress';

const CareerGoal = () => {
  const dispatch = useDispatch();
  const careerGoalData = useSelector((state) => state.careerGoal);

  useEffect(() => {
    dispatch(fetchCareerGoal());
  }, [dispatch]);

  const careerName = careerGoalData.data?.record?.data[0].name;
  const careerProgress = careerGoalData.data?.record?.data[0].progress;

  const navigateTo = useNavigation();

  return (
    <Container>
      <CircularProgress value={careerProgress} />
      <div className='text-center'>
        <div>I want to become {getIndefiniteArticle(careerName)}</div>
        <div className='h2'>{careerName}</div>
      </div>
      <div className='action-text' onClick={() => navigateTo('/my-insights')}>View Insights</div>
    </Container>
  );
};

export default CareerGoal;

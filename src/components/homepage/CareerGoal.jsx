import { useDispatch, useSelector } from 'react-redux';
import { fetchCareerGoal } from '../../redux/careerGoalSlice';
import { getIndefiniteArticle } from '/src/utils/grammarFormatting.js';
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

  const startsWithVowel = careerName && /^[aeiouAEIOU]/.test(careerName);
  const indefiniteArticle = startsWithVowel ? 'an' : 'a';

  return (
    <Container>
      <CircularProgress value={careerProgress} />
      <div className='text-center'>
        <div>I want to become {getIndefiniteArticle(careerName)}</div>
        <div className='h2'>{careerName}</div>
      </div>
      <div className='body-bold text-accent'>View Insights</div>
    </Container>
  );
};

export default CareerGoal;

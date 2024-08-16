import React from 'react';

import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import CareerGoal from '../components/CareerGoal';

const InsightsPage = () => {
  return (
    <div className='page-container'>
      <div className='page-heading-text'>
          <Title titleText='Insights Page' />
          <Subtitle subtitleText='Have a look at the top insights for the day.' />
      </div>
      <CareerGoal hideAction />
    </div>
  )
}

export default InsightsPage;
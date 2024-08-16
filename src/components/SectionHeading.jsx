import React from 'react';
import { useNavigation } from '../utils/navigateTo';

const SectionHeading = ({ headingText, actionText, link }) => {
  const navigateTo = useNavigation();

  return (
    <div className='flex justify-between items-center'>
      <div className='h2'>{headingText}</div>
      <div className='action-text' onClick={() => navigateTo(link)}>{actionText ||''}</div>
    </div>
  )
}

export default SectionHeading;
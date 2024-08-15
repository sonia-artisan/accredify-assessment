import React from 'react'

const SectionHeading = ({ headingText, actionText }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='h2'>{headingText}</div>
      <div className='body-bold text-accent'>{actionText ||''}</div>
    </div>
  )
}

export default SectionHeading;

const SectionHeading = ({ headingText, actionText }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='h2'>{headingText}</div>
      <div className='action-text'>{actionText ||''}</div>
    </div>
  )
}

export default SectionHeading;
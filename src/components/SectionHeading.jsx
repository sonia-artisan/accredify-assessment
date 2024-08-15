import '../styles/components/SectionHeading.scss';

const SectionHeading = ({ headingText, actionText }) => {
  return (
    <div className='section-heading-container'>
      <div className='h2'>{headingText}</div>
      <div className='section-action-text'>{actionText ||''}</div>
    </div>
  )
}

export default SectionHeading;
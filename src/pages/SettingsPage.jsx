import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

const PrivacyPage = () => {
  return (
    <div className='page-container'>
      <div className='page-heading-text'>
          <Title titleText='Settings Page' />
          <Subtitle subtitleText='Change your personal preference or account settings here.' />
      </div>
    </div>
  )
}

export default PrivacyPage;
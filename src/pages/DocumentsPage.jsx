import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

const DocumentsPage = () => {
  return (
    <div className='page-container'>
      <div className='page-heading-text'>
          <Title titleText='Documents Page' />
          <Subtitle subtitleText='View all your documents here!' />
      </div>
    </div>
  )
}

export default DocumentsPage;
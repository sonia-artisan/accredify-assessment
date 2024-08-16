import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import RecentDocuments from '../components/RecentDocuments';

const DocumentsPage = () => {
  return (
    <div className='page-container'>
      <div className='page-heading-text'>
          <Title titleText='Documents Page' />
          <Subtitle subtitleText='View all your documents here!' />
      </div>
      <RecentDocuments />
    </div>
  )
}

export default DocumentsPage;
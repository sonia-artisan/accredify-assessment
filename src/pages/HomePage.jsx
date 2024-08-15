import '/src/styles/pages/Homepage.scss';

import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import SectionHeading from '../components/SectionHeading';
import CareerGoal from '../components/homepage/CareerGoal';
import RecentDocuments from '../components/homepage/RecentDocuments';

const HomePage = () => {
	return (
		<div className='page-container'>
			<div className='page-heading-text'>
				<Title titleText='Hi, Gerald Goh' />
				<Subtitle subtitleText='Manage your documents issued by SMU Academy or track your career goal.' />
			</div>
			<div className='home-page-content-container'>
				<div className='section career-goal-section'>
					<SectionHeading headingText='Career Goal' />
					<CareerGoal />
				</div>
				<div className='section recent-documents-section'>
					<SectionHeading
						headingText='Recent Documents'
						actionText='View all documents'
					/>
					<RecentDocuments />
				</div>
			</div>
		</div>
	);
};

export default HomePage;

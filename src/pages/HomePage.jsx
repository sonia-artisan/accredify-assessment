import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import SectionHeading from '../components/SectionHeading';
import CareerGoal from '../components/homepage/CareerGoal';
import RecentDocuments from '../components/homepage/RecentDocuments';

const HomePage = () => {
	return (
		<div className='my-16 mx-24 flex flex-col gap-16'>
			<div className='flex flex-col gap-3'>
				<Title titleText='Hi, Gerald Goh' />
				<Subtitle subtitleText='Manage your documents issued by SMU Academy or track your career goal.' />
			</div>
			<div className='grid grid-cols-3 gap-10'>
				<div className='section col-span-3 md:col-span-1'>
					<SectionHeading headingText='Career Goal' />
					<CareerGoal />
				</div>
				<div className='section col-span-3 md:col-span-2'>
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

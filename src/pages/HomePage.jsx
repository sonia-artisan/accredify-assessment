import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { fetchPersonalUser } from "../redux/personalUserSlice";
import { useEffect } from "react";
import '/src/styles/pages/Homepage.scss';

import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import SectionHeading from '../components/SectionHeading';
import CareerGoal from '../components/CareerGoal';
import RecentDocuments from '../components/RecentDocuments';

const HomePage = () => {
	const dispatch = useDispatch();
	const userData = useSelector(state => state.user);
  const personalUserData = useSelector(state => state.personalUser);
  const userType = useSelector(state => state.userType);

	useEffect(() => {
    if (userType === 'managedUser') {
      dispatch(fetchUser());
    } else {
      dispatch(fetchPersonalUser()); 
    }
  }, [dispatch, userType]);

  	const userName = userType === 'managedUser' 
    ? userData.data?.record?.data?.name 
    : personalUserData.data?.record?.data?.name;

	const subtitleText = userType === 'managedUser' 
    ? 'Manage your documents issued by SMU Academy or track your career goal.'
    : 'Manage your documents.';

	const isManagedUser = userType === 'managedUser';

	return (
		<div className='page-container'>
			<div className='page-heading-text'>
				<Title titleText={`Hi, ${userName} 👋`} />
				<Subtitle subtitleText={subtitleText} />
			</div>
			<div className='home-page-content-container'>
				{isManagedUser && (
					<div className='section career-goal-section'>
						<SectionHeading headingText='Career Goal' />
						<CareerGoal />
					</div>
				)}
				<div className={`section recent-documents-section ${isManagedUser ? 'managed-user' : 'personal-user'}`}>
					<SectionHeading
						headingText='Recent Documents'
						actionText='View all documents'
						link='/my-documents'
					/>
					<RecentDocuments />
				</div>
			</div>
		</div>
	);
};

export default HomePage;

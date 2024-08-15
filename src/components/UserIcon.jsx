import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { fetchPersonalUser } from "../redux/personalUserSlice";
import { useEffect } from "react";
import SampleUserIcon from "/src/assets/managed_user.png";

const UserIcon = ({ isSidebar }) => {
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
  
  const userImage = userType === 'managedUser' 
	? userData.data?.record?.data?.profile_picture_url 
	: personalUserData.data?.record?.data?.profile_picture_url;
  

	return (
		<div className='flex items-center justify-center'>
			<img className={`w-10 ${isSidebar ? 'pt-5 pb-8' : ''}`} src={userImage} alt='user-profile-image' />
		</div>
	);
};

export default UserIcon;

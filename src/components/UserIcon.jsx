import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { useEffect } from "react";
import SampleUserIcon from "/src/assets/managed_user.png";

const UserIcon = () => {
	const dispatch = useDispatch();
	const userData = useSelector(state => state.user);

	useEffect(() => {
		dispatch(fetchUser())
	}, [dispatch])
	console.log('userData:',userData);

  if (!userData.data || !userData.record || !userData.record.data) {
    return <div>Loading...</div>;
  }
  
  const userImage = userData.data?.record?.data?.profile_picture_url || SampleUserIcon;
  

	return (
		<div className='flex items-center justify-center'>
			<img className='w-10 pt-5 pb-8' src={userImage} alt='user-profile-image' />
		</div>
	);
};

export default UserIcon;

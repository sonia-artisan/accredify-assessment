import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { fetchPersonalUser } from "../redux/personalUserSlice";
import { toggleUserType } from "../redux/toggleSlice";
import { useEffect, useState } from "react";
import '../styles/components/Header.scss';

import Button from './Button';
import PopupMenu from './PopupMenu'; 

import ChevronDown from '/src/assets/chevron_down.svg';

const Header = () => {
  const dispatch = useDispatch();
	const userData = useSelector(state => state.user);
  const personalUserData = useSelector(state => state.personalUser);
  const userType = useSelector(state => state.userType);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handleToggleClick = () => {
    dispatch(toggleUserType());
  };

  const handleMenuButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className='header-background'>
        <div className='header-foreground'>
          <Button label={userType === 'managedUser' ? 'Managed User' : 'Personal User'} isToggle onClick={handleToggleClick} />
          <Button label={userName} icon={ChevronDown} onClick={handleMenuButtonClick} isPopupOpen={isPopupOpen}/>
          {isPopupOpen && <PopupMenu userName={userName}/>}
        </div>
    </div>
  )
}

export default Header;
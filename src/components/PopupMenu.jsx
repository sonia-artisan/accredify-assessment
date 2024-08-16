import React from 'react';
import { useNavigation } from '../utils/navigateTo';
import '../styles/components/PopupMenu.scss';

import UserIcon from './UserIcon';

import LogOutIcon from '/src/assets/log_out.svg';

const PopupMenu = ({ userName }) => {
	const navigateTo = useNavigation();

  return (
    <div  data-testid="popup-menu" className='popup-menu'>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-4'>
					<UserIcon size='50px' />
					<div>
						<div className='text-[0.95rem] font-bold'>{userName}</div>
						<div className='body text-subtitle'>Recipient</div>
					</div>
				</div>
        <hr />
        <div className='flex items-center gap-2 cursor-pointer hover:underline' onClick={() => navigateTo('/sign-in')}>
          <img src={LogOutIcon} className='w-[1.1rem]'/>
          <div className='body text-subtitle pb-1 '>Log out</div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;

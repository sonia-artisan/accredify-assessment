import { useState } from 'react';
import '../styles/components/Sidebar.scss';

import UserIcon from './UserIcon';

import ManagedUserImage from '/src/assets/managed_user.png';
import HomeIcon from '/src/assets/sidebar/home.svg';
import DocumentIcon from '/src/assets/sidebar/document.svg';
import LightbulbIcon from '/src/assets/sidebar/lightbulb.svg';
import ShieldIcon from '/src/assets/sidebar/shield.svg';
import SettingsIcon from '/src/assets/sidebar/settings.svg';

const SidebarItem = ({ icon, label, isSelected, onClick }) => {
	return (
		<li className='py-2'>
			<a
				className={`sidebar-item-anchor ${
					isSelected ? 'bg-sidebar-active' : ''
				}`}
				onClick={onClick}
			>
				<div className='sidebar-icon-wrapper'>
					<img
						className='sidebar-icon'
						src={icon}
						alt={`${label}-icon`}
						style={{
							filter: isSelected
								? 'brightness(0) invert(1)'
								: 'brightness(0) invert(0.8)',
						}}
					/>
				</div>
			</a>
		</li>
	);
};

const Sidebar = () => {
	const [selectedItem, setSelectedItem] = useState('Home');

	const sidebarItems = [
		{ icon: HomeIcon, label: 'Home' },
		{ icon: DocumentIcon, label: 'Documents' },
		{ icon: LightbulbIcon, label: 'Insights' },
		{ icon: ShieldIcon, label: 'Privacy' },
		{ icon: SettingsIcon, label: 'Settings' },
	];

	return (
		<aside className='sidebar'>
			<nav>
				<UserIcon />

				<ul>
					{sidebarItems.map((item) => (
						<SidebarItem
							key={item.label}
							icon={item.icon}
							label={item.label}
							link={item.link}
							isSelected={selectedItem === item.label}
							onClick={() => setSelectedItem(item.label)}
						/>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;

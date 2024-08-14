const UserIcon = ({ icon }) => {
	return (
		<div className="flex items-center justify-center">
			<img className="w-10 pt-5 pb-8" src={icon} alt="user-profile-image" />
		</div>
	);
};

export default UserIcon;

import UserIcon from "./UserIcon";
import '../styles/components/Button.scss';

const Button = ({ label, onClick, icon, isToggle, isPopupOpen }) => {
	return (
		<button className={`button-component ${(isToggle || isPopupOpen) ? 'toggle-button' : 'menu-button'}`} onClick={onClick}>
			{!isToggle && <UserIcon isSidebar={false}/>}
			{label}
			{icon && <img className='button-icon' src={icon} alt={`${label}-icon`} />}
		</button>
	);
};

export default Button;

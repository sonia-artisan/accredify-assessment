import UserIcon from "./UserIcon";
import '../styles/components/Button.scss';

const Button = ({ label, onClick, icon, isToggle, isPopupOpen, size }) => {
	return (
		<button className={`button-component body ${(isToggle || isPopupOpen) ? 'toggle-button' : 'menu-button'}`} onClick={onClick}>
			{!isToggle && <UserIcon size={size} />}
			{label}
			{icon && <img className='button-icon' src={icon} alt={`${label}-icon`} />}
		</button>
	);
};

export default Button;

import UserIcon from "./UserIcon";
import '../styles/components/Button.scss';

const Button = ({ label, onClick, icon, isToggle }) => {
	return (
		<button className={`button-component ${isToggle ? 'toggle-button' : 'menu-button'}`} onClick={onClick}>
			{!isToggle && <UserIcon isSidebar={false}/>}
			{label}
			{icon && <img className='button-icon' src={icon} alt={`${label}-icon`} />}
		</button>
	);
};

export default Button;

import UserIcon from "./UserIcon";
import '../styles/components/Button.scss';

const Button = ({ label, onClick, icon }) => {
	return (
		<button className='button-component' onClick={onClick}>
			{label}
      <UserIcon isSidebar={false}/>
		</button>
	);
};

export default Button;

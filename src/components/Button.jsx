import React from 'react';

const Button = ({ label, onClick, icon }) => {
	return (
		<button className='flex items-center gap-4 rounded-[4px] active:outline active:outline-1 active:outline-accent active:bg-[#F3F4F5] hover:outline hover:outline-1 hover:outline-accent hover:bg-[#F3F4F5] py-2 px-3' onClick={onClick}>
			{label}
      <img src={icon} className='w-3' />
		</button>
	);
};

export default Button;

import React from 'react';

import Button from './Button';

import ChevronDown from '/src/assets/chevron_down.svg';

const Header = () => {
  return (
    <div className='bg-sidebar-background'>
        <div className='flex justify-end w-full -z-40 py-4 px-8 rounded-tl-xl bg-white border-b border-solid border-border'>
          <Button label="Gerald Goh" icon={ChevronDown} />
        </div>
    </div>
  )
}

export default Header;
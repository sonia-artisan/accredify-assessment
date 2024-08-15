import React from 'react';
import '../styles/components/Header.scss';

import Button from './Button';

import ChevronDown from '/src/assets/chevron_down.svg';

const Header = () => {
  return (
    <div className='header-background'>
        <div className='header-foreground'>
          <Button label="Gerald Goh" icon={ChevronDown} />
        </div>
    </div>
  )
}

export default Header;
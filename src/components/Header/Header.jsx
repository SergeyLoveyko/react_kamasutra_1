import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return  <header className={s.header}>
		        <img src='data:image/png;base64,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' />
	        </header>
}

export default Header;
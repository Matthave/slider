import React from 'react';
import Heading from './Heading';
import logo from '../IMG/psd2css logo.png';
import logo2 from '../IMG/logo2.png';
import logo1 from '../IMG/logo1.png';

function Header() {
	return (
		<section className='header'>
			<section className='logo'>
				<img className='logo__img' src={logo} alt="" />
			</section>
			<Heading classes='topHeading' logoImg={logo2} button={true} />
			<Heading classes='bottomHeading' logoImg={logo1} />
		</section>
	)
}

export default Header

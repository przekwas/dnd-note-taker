import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

interface NavbarProps {
	toggleVisible: () => void;
}

const Navbar = ({ toggleVisible }: NavbarProps) => {
	return (
		<div>
			<button onClick={toggleVisible} className="btn btn-square btn-ghost">
				<GiHamburgerMenu className="text-2xl md:text-3xl" />
			</button>
		</div>
	);
};

export default Navbar;

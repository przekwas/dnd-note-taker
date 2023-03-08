import React from 'react';
import { NavLink } from 'react-router-dom';

interface SideDrawerProps {
	toggleVisible: () => void;
}

const SideDrawer = ({ toggleVisible }: SideDrawerProps) => {
	return (
		<ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
			<li>
				<NavLink onClick={toggleVisible} to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink onClick={toggleVisible} to="/login">
					Login
				</NavLink>
			</li>
			<li>
				<NavLink onClick={toggleVisible} to="/register">
					Register
				</NavLink>
			</li>
			<li>
				<NavLink onClick={toggleVisible} to="/profile">
					Profile
				</NavLink>
			</li>
			<li>
				<NavLink onClick={toggleVisible} to="/notes">
					Notes
				</NavLink>
			</li>
			<li>
				<NavLink to="/notes/new">Add Note</NavLink>
			</li>
		</ul>
	);
};

export default SideDrawer;

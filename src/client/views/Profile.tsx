import React from 'react';
import { useAuth } from '../utilities/use-auth';

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
	const { logout } = useAuth();

	return (
		<div>
			<h1>Profile</h1>
			<div>
				<button onClick={() => logout()}>Logout</button>
			</div>
		</div>
	);
};

export default Profile;

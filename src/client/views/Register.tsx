import React from 'react';
import { useAuth } from '../utilities/use-auth';
import { useForm } from '../utilities/use-form';
import authService from '../services/auth';

interface RegisterProps {}

const Register = (props: RegisterProps) => {
	const { signin } = useAuth();
	const { values, handleChanges } = useForm<{ [key: string]: string }>({});

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		authService
			.registerUser(values)
			.then(() => signin('/profile'))
			.catch(e => console.log(e.message));
	};

	return (
		<div>
			<h1>Register View</h1>
			<div>
				<form>
					<input
						type="email"
						name="email"
						autoComplete="current-email"
						value={values.email || ''}
						onChange={handleChanges}
					/>
					<input
						type="password"
						name="password"
						autoComplete="current-password"
						value={values.password || ''}
						onChange={handleChanges}
					/>
					<input
						type="text"
						name="first_name"
						value={values.first_name || ''}
						onChange={handleChanges}
					/>
					<input
						type="text"
						name="last_name"
						value={values.last_name || ''}
						onChange={handleChanges}
					/>
					<button onClick={handleClick}>Register</button>
				</form>
			</div>
		</div>
	);
};

export default Register;

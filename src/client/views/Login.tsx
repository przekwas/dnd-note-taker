import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../utilities/use-auth';
import { useForm } from '../utilities/use-form';
import authService from '../services/auth';

import { Container, Input } from '../components';

interface LoginProps {}

const Login = (props: LoginProps) => {
	const location = useLocation();
	const { signin } = useAuth();
	const [error, setError] = useState<string>('');
	const { values, handleChanges } = useForm<{ [key: string]: string }>({
		email: 'guest@test.com',
		password: 'password123'
	});

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		authService
			.loginUser(values)
			.then(() => signin('/profile'))
			.catch(e => setError(e.message));
	};

	return (
		<Container>
			<form className="flex flex-col items-center justify-center">
				<div className="w-full max-w-xs form-control">
					<label htmlFor="email" className="label">
						<span className="label-text">Email</span>
					</label>
					<Input
						type="email"
						name="email"
						autoComplete="current-email"
						value={values.email || ''}
						onChange={handleChanges}
					/>
				</div>
				<div className="w-full max-w-xs form-control">
					<label htmlFor="password" className="label">
						<span className="label-text">Password</span>
					</label>
					<Input
						type="password"
						name="password"
						autoComplete="current-password"
						value={values.password || ''}
						onChange={handleChanges}
					/>
				</div>

				<button onClick={handleClick} className="mt-5 btn btn-primary btn-wide">
					Login
				</button>
			</form>
			{location.state?.message && <div>{location.state?.message}</div>}
			{error && <div>{error}</div>}
		</Container>
	);
};

export default Login;

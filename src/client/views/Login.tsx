import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import authService from '../services/auth';

interface LoginProps {}

const Login = (props: LoginProps) => {
	const location = useLocation();
	const navigate = useNavigate();

	const [error, setError] = useState<string>('');

	const [values, setValues] = useState<{ [key: string]: string }>({
		email: 'guest@test.com',
		password: 'password123'
	});

	const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		authService
			.loginUser(values)
			.then(() => navigate('/private'))
			.catch((e) => setError(e.message));
	};

	return (
		<div>
			<h1>Login</h1>
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
					<button onClick={handleClick}>Login</button>
				</form>
				{location.state?.from.pathname === '/private' && (
					<div>you must be logged in, sucka</div>
				)}
				{error && <div>{error}</div>}
			</div>
		</div>
	);
};

export default Login;

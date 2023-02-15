import React, { useState } from 'react';

interface LoginProps {}

const Login = (props: LoginProps) => {
	const [values, setValues] = useState<{ [key: string]: string }>({
		email: 'guest@test.com',
		password: 'password123'
	});

	const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('lul')
		setValues(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		fetch('/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		})
			.then(res => res.json())
			.then(res => {
				localStorage.setItem('token', res.token);
			})
			.catch(e => console.log('[error]', e.message));
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
			</div>
		</div>
	);
};

export default Login;

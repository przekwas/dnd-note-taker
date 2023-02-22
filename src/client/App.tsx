import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Profile, Login } from './views';
import { Navbar, AuthProvider, Private } from './components';

interface AppProps {}

const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route
						path="profile"
						element={
							<Private>
								<Profile />
							</Private>
						}
					/>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;

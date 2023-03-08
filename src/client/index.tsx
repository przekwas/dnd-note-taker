import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/app.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
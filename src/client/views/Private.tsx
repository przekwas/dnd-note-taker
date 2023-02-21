import React, { useEffect } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';

interface PrivateProps {}

const Private = (props: PrivateProps) => {
	const location = useLocation();
    const navigate = useNavigate();
	const TOKEN = localStorage.getItem('token');

	useEffect(() => {
		fetch('/auth/validate/me', { headers: { Authorization: `Bearer ${TOKEN}` } })
			.then(res => {
                if (res.status !== 200) {
                    navigate('/login');
                }
            })
			.catch(e => console.log(e));
	}, []);

	if (!TOKEN) {
		return <Navigate to="/login" state={{ from: location }} replace={true} />;
	}

	return (
		<div>
			<h1>Private</h1>
		</div>
	);
};

export default Private;

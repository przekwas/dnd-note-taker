import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import noteService from '../services/notes';

interface NoteDetailsProps {}

const NoteDetails = (props: NoteDetailsProps) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [details, setDetails] = useState<{ [key: string]: string }>(null);

	useEffect(() => {
		noteService
			.getOneNote(id)
			.then(data => setDetails(data))
			.catch(e => console.log(e.message));
	}, [id]);

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		noteService
			.destroyNote(id)
			.then(() => navigate('/notes'))
			.catch(e => console.log(e.message));
	};

	return (
		<div>
			<h1>NoteDetails View</h1>
			{details && (
				<div>
					<h2>{details.first_name}</h2>
					<small>{details.created_at}</small>
					<button onClick={handleDelete}>This note stinks</button>
					<div>
						{details.body.split('\n').map((para, idx) => (
							<p key={`para-idx-${idx}`}>
								{para}
								<br />
							</p>
						))}
					</div>
				</div>
			)}
			<div>
				<Link to="/notes">Go Back</Link>
				<Link to={`/notes/${id}/update`} state={details?.body}>Edit Note</Link>
			</div>
		</div>
	);
};

export default NoteDetails;
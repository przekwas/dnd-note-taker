import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import noteService from '../services/notes';

interface NoteDetailsProps {}

const NoteDetails = (props: NoteDetailsProps) => {
	const { id } = useParams();
	const [details, setDetails] = useState<{ [key: string]: any }>(null);

	useEffect(() => {
		noteService
			.getOneNote(id)
			.then(data => setDetails(data))
			.catch(e => console.log(e.message));
	}, [id]);

	return (
		<div>
			<h1>NoteDetails View</h1>
			{details && (
				<div>
					<h2>{details.first_name}</h2>
					<small>{details.created_at}</small>
					<p>{details.body}</p>
				</div>
			)}
			<div>
				<Link to="/notes">Go Back</Link>
			</div>
		</div>
	);
};

export default NoteDetails;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import notesService from '../services/notes';

interface NotesProps {}

const Notes = (props: NotesProps) => {
	const [notes, setNotes] = useState<{ [key: string]: any }[]>([]);

	useEffect(() => {
		notesService
			.getAllNotes()
			.then(data => setNotes(data))
			.catch(e => console.log(e.message));
	}, []);

	return (
		<div>
			<h1>Notes View</h1>
			<div>
				{notes.map(note => (
					<div key={`note-id-${note.id}`}>
						<h2>{note.first_name}</h2>
                        <Link to={`/notes/${note.id}`}>
                            <button>View Full Note</button>
                        </Link>
						<p>{note.body.slice(0, 25)} ...</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;

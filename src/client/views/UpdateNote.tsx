import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useForm } from '../utilities/use-form';
import noteService from '../services/notes';

interface UpdateNoteProps {}

const UpdateNote = (props: UpdateNoteProps) => {
	const { id } = useParams();
	const { state } = useLocation();
	const navigate = useNavigate();

	// >:(
	const { values, handleChanges, setValues } = useForm<{ body: string }>(
		(state && { body: state }) || { body: '' }
	);

	useEffect(() => {
		if (!state) {
			noteService
				.getOneNote(id)
				.then(data => setValues({ body: data.body }))
				.catch(e => console.log(e.message));
		}
	}, [id]);

	const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		noteService
			.updateNote(id, values)
			.then(() => navigate(`/notes/${id}`))
			.catch(e => console.log(e.message));
	};

	return (
		<div>
			<h1>UpdateNote View</h1>
			<div>
				<form>
					<textarea rows={10} name="body" value={values.body} onChange={handleChanges} />
					<button onClick={handleUpdate}>Change it up!</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateNote;

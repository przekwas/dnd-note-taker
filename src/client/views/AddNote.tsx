import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../utilities/use-form';
import notesService from '../services/notes';

interface AddNoteProps {}

const AddNote = (props: AddNoteProps) => {
    const navigate = useNavigate();
	const { values, handleChanges } = useForm<{ body: string }>({ body: '' });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        notesService.addNewNote(values)
            .then(id => navigate(`/notes/${id}`))
            .catch(e => console.log(e.message));
    }

	return (
		<div>
			<h1>AddNote View</h1>
			<div>
				<form>
					<textarea rows={10} name="body" value={values.body} onChange={handleChanges} />
					<button onClick={handleSubmit}>Jot that down!</button>
				</form>
			</div>
		</div>
	);
};

export default AddNote;

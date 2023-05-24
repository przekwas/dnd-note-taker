import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import noteService from '../services/notes';

import { GiReturnArrow, GiQuillInk, GiTrashCan } from 'react-icons/gi';
import { Button, Container, Toast, Modal } from '../components';

interface NoteDetailsProps {}

const NoteDetails = (props: NoteDetailsProps) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [details, setDetails] = useState<{ [key: string]: string }>(null);

	useEffect(() => {
		noteService
			.getOneNote(id)
			.then(data => setDetails(data))
			.catch(e => Toast.error(e.message));
	}, [id]);

	const openDeleteModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		setShowModal(true);
	};

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		noteService
			.destroyNote(id)
			.then(() => {
				setShowModal(false);
				navigate('/notes');
			})
			.catch(e => Toast.error(e.message));
	};

	return (
		<>
			<Container className="py-16">
				<h1 className="mb-4 text-4xl font-bold text-primary">Note Details</h1>
				{details && (
					<div className="mb-8 text-lg">
						<h2 className="mb-2 text-2xl font-semibold text-primary">
							{details.first_name}
						</h2>
						<small className="text-secondary">
							{dayjs(details.created_at).format('MMMM D, YYYY')}
						</small>
						<div className="mt-4 text-secondary">
							{details.body.split('\n').map((para, idx) => (
								<p key={`para-idx-${idx}`}>
									{para}
									<br />
								</p>
							))}
						</div>
					</div>
				)}
				<div className="flex flex-col mt-4 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
					<Link
						className="flex items-center justify-center w-full text-center btn btn-ghost lg:w-auto"
						to="/notes">
						<GiReturnArrow className="mr-2" />
						Go Back
					</Link>
					<Link
						className="flex items-center justify-center w-full text-center btn btn-ghost lg:w-auto"
						to={`/notes/${id}/update`}
						state={details?.body}>
						<GiQuillInk className="mr-2" />
						Edit Note
					</Link>
					<Button
						color="ghost"
						onClick={openDeleteModal}
						className="flex items-center justify-center w-full lg:w-auto">
						<GiTrashCan className="mr-2" />
						This note stinks
					</Button>
				</div>
			</Container>
			{showModal && (
				<Modal onClose={() => setShowModal(false)} onConfirm={handleDelete}>
					<h2 className="mb-4 text-2xl font-bold text-primary">Delete Note</h2>
					<p className="mb-8 text-lg text-secondary">
						Are you sure you want to delete this note?
					</p>
				</Modal>
			)}
		</>
	);
};

export default NoteDetails;

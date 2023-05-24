import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';

const modalRoot = document.getElementById('modal-root');

interface ModalProps {
	children: React.ReactNode;
	onClose: () => void;
	onConfirm: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Modal = ({ children, onClose, onConfirm }: ModalProps) => {
	const el = document.createElement('div');

	useEffect(() => {
		modalRoot.replaceChildren(el);
	}, []);

	return ReactDOM.createPortal(
		<div
			onClick={onClose}
			className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
			<div className="p-8 bg-white rounded-lg shadow-lg">
				{children}
				<div className="flex justify-between">
					<Button color="primary" onClick={onConfirm}>
						Confirm
					</Button>
					<Button color="ghost" onClick={onClose}>
						Cancel
					</Button>
				</div>
			</div>
		</div>,
		el
	);
};

export default Modal;

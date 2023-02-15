import { Router } from 'express';
import { checkToken } from '../../middlewares/auth.mw';
import { v4 as uuidv4 } from 'uuid';
import db from '../../db';

const router = Router();

router.route('*').post(checkToken).put(checkToken).delete(checkToken);

// GET /api/notes/:id
router.get('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const [results] = await db.notes.one(id);
		res.json(results);
	} catch (error) {
		next(error);
	}
});

// GET /api/notes
router.get('/', async (req, res, next) => {
	try {
		const results = await db.notes.all();
		res.json(results);
	} catch (error) {
		next(error);
	}
});

// POST /api/notes
router.post('/', async (req, res, next) => {
	try {
		const noteDTO = {
			id: uuidv4(),
			userid: req.payload.id,
			...req.body
		};
		await db.notes.insert(noteDTO);
		res.json({ id: noteDTO.id, message: 'new note created' });
	} catch (error) {
		next(error);
	}
});

// DELETE /api/notes/:id
router.delete('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const userid = req.payload.id;
		const result = await db.notes.destroy(id, userid);

		if (!result.affectedRows) {
			throw new Error('note does not exist');
		}

		res.json({
			id,
			message: 'note deleted successfully'
		});
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const userid = req.payload.id;
		const noteDTO = {
			...req.body
		};
		await db.notes.update(noteDTO, id, userid);
		res.json({
			id,
			message: 'note updated successfully'
		});
	} catch (error) {
		next(error);
	}
});

export default router;

import { Router } from 'express';
import { checkToken } from '../../middlewares/auth.mw';
import db from '../../db';

const router = Router();

router.route('*').post(checkToken).put(checkToken).delete(checkToken);

// GET /api/notes/
router.get('/', async (req, res, next) => {
	try {
		const results = await db.notes.all();
		res.json(results);
	} catch (error) {
		next(error);
	}
});

// GET /api/notes/private
router.get('/private', checkToken, async (req, res, next) => {
	try {
		res.json('private endpoint :)');
	} catch (error) {
		next(error);
	}
});

export default router;

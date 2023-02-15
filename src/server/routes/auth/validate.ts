import { Router } from 'express';
import { checkToken } from '../../middlewares/auth.mw';

const router = Router();

// GET /auth/validate/me
router.get('/me', checkToken, (req, res, next) => {
	try {
		res.status(200).json({ message: 'you gucci' })
	} catch (error) {
		next(error);
	}
});

export default router;

import passport from 'passport';
import PassportLocal from 'passport-local';
import bcrypt from 'bcrypt';
import db from '../db';
import type { Express } from 'express';

export function configurePassport(app: Express) {
	passport.use(
		new PassportLocal.Strategy(
			{
				usernameField: 'email',
				session: false
			},
			async (email, password, done) => {
				try {
					const [userFound] = await db.users.find('email', email);

					if (userFound && (await bcrypt.compare(password, userFound.password))) {
						delete userFound.password;
						return done(null, userFound);
					}

					done(null, false, { message: 'invalid credentials' });
				} catch (error) {
					done(error);
				}
			}
		)
	);

	app.use(passport.initialize());
}

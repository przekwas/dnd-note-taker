import express from 'express';
import morgan from 'morgan';
import path from 'path';

import config from './config';
import routes from './routes';

import { configurePassport } from './middlewares/passport';
import { notFoundHandler, globalErrorHandler } from './middlewares/error-handlers.mw';

const app = express();

// status checkpoints
app.get('/status', (req, res) => res.sendStatus(200));
app.head('/status', (req, res) => res.sendStatus(200));

configurePassport(app);
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
app.get(['/login', '/private'], (req, res) =>
	res.sendFile(path.join(__dirname, '../public/index.html'))
);
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(config.app.port, () => console.log(`Server Running on Port ${config.app.port}! ;)`));

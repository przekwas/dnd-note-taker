import express from 'express';
import morgan from 'morgan';

import config from './config';
import routes from './routes';

import { notFoundHandler, globalErrorHandler } from './middlewares/error-handlers';

const app = express();

// status checkpoints
app.get('/status', (req, res) => res.sendStatus(200));
app.head('/status', (req, res) => res.sendStatus(200));

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(config.app.port, () => console.log(`Server Running on Port ${config.app.port}! ;)`));

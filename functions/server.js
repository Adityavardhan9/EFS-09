// functions/server.js
import express from 'express';
import serverless from 'serverless-http';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import routes from './routes.js';

const app = express();
app.use(express.json());

// Configure logging
morgan.token('ip', (req) => req.headers['x-forwarded-for'] || req.socket.remoteAddress);
const logFormat = ':ip - :method :url :status :response-time ms';

const logDirectory = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' });
app.use(morgan(logFormat, { stream: accessLogStream }));
app.use(morgan(logFormat));

// Use routes
app.use('/api', routes);

export const handler = serverless(app);

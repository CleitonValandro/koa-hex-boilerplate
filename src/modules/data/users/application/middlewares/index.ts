import bodyParser from 'koa-bodyparser';
import { authMiddleware } from './authMiddleware';

export const middlewares = [
    bodyParser(),
    authMiddleware
];
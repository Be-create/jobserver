import express from 'express';
import {  login, register } from '../handlers/auth.js';
import { getalljobs, postjob } from '../handlers/jobs.js';

const authRouter = express.Router();

authRouter.post('/api/register', register)
authRouter.post('/api/login', login)
authRouter.post('/api/postjob', postjob)
authRouter.get('/api/job', getalljobs)


export default authRouter;
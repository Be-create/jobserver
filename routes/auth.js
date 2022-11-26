import express from 'express';
import {  login, register } from '../handlers/auth.js';
import { applyjob, DeleteJob, getalljobs, getjobs, postjob, updatejob } from '../handlers/jobs.js';

const authRouter = express.Router();

authRouter.post('/api/register', register)
authRouter.post('/api/login', login)
authRouter.post('/api/postjob', postjob)
authRouter.get('/api/job', getjobs)
authRouter.delete('/api/deletejob',DeleteJob)
authRouter.put('/api/updatejob',updatejob)
authRouter.get('/api/alljob', getalljobs)
authRouter.post('/api/apply', applyjob)
export default authRouter;
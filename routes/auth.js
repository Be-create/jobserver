import express from 'express';
import {  login, register } from '../handlers/auth.js';
import { applyjob, DeleteJob, getalljobs, getappliedjobs, getjobs, postjob, updatejob } from '../handlers/jobs.js';

const Router = express.Router();

Router.post('/api/register', register)
Router.post('/api/login', login)
Router.post('/api/postjob', postjob)
Router.get('/api/job', getjobs)
Router.delete('/api/deletejob',DeleteJob)
Router.put('/api/updatejob',updatejob)
Router.get('/api/alljob', getalljobs)
Router.get('/api/appliedjob', getappliedjobs)
Router.post('/api/apply', applyjob)
export default Router;
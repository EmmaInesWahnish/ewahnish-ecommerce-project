import express from 'express';
import { saveAuxurl } from '../controller/auxiliarController.js';

const auxiliarRouter = express.Router();

auxiliarRouter.post('/', saveAuxurl);

export default auxiliarRouter

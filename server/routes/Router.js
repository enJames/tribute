import express from 'express';
import Tribute from '../controllers/Tribute';
import Validator from '../middlewares/Validator';

const Router = express.Router();
const { comment, fetchTributes } = Tribute;
const { runValidations } = Validator;

Router.get('/', fetchTributes);
Router.post('/', runValidations, comment);

export default Router;

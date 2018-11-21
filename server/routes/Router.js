import express from 'express';
import Tribute from '../controllers/Tribute';

const Router = express.Router();

Router.get('/', Tribute.fetchTributes);
Router.post('/', Tribute.comment);

export default Router;

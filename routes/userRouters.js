import express from 'express';
import usercontroller from '../controllers/usersControllers.js';

const router = express.Router();

router.post('/signup', usercontroller.signUp);

router.post('/login', usercontroller.login);


export default router;
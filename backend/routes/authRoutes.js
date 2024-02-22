import express from 'express';
import {
    createInvUser,
    createUser,
    loginInvUser,
    loginUser
} from '../controller/authController.js'


const router = express.Router();


router.route('/register').post(createUser);
router.route('/register/invUser').post(createInvUser);
router.route('/login').post(loginUser);
router.route('/login/invUser').post(loginInvUser);


export default router

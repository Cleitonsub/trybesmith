import { Router } from 'express';
import LoginController from '../controllers/loginController';

const {
  signUp,
} = new LoginController();

const router = Router();

router.post('/', signUp);

export default router;

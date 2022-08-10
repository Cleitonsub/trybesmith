import { Router } from 'express';
import UserController from '../controllers/userController';

const {
  createUser,
} = new UserController();

const router = Router();

router.post('/', createUser);

export default router;

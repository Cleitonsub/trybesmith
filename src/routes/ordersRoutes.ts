import { Router } from 'express';
import OrderController from '../controllers/orderController';
import { validateToken } from '../middlewares/validateToken';

const {
  getAllOrders,
  createOrder,
} = new OrderController();

const router = Router();

router.get('/', getAllOrders);
router.use(validateToken);
router.post('/', createOrder);

export default router;
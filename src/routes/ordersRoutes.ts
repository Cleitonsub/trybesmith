import { Router } from 'express';
import OrderController from '../controllers/orderController';

const {
  getAllOrders,
  createOrder,
} = new OrderController();

const router = Router();

router.get('/', getAllOrders);
router.post('/', createOrder);

export default router;
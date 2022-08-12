import { Router } from 'express';
import OrderController from '../controllers/orderController';

const {
  getAllOrders,
} = new OrderController();

const router = Router();

router.get('/', getAllOrders);

export default router;
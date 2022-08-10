import { Router } from 'express';
import ProductController from '../controllers/productController';

const {
  createProduct,
} = new ProductController();

const router = Router();

router.post('/', createProduct);

export default router;

import { Router } from 'express';
import ProductController from '../controllers/productController';

const {
  createProduct,
  getAllProducts,
} = new ProductController();

const router = Router();

router.post('/', createProduct);
router.get('/', getAllProducts);

export default router;

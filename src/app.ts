import express from 'express';
import helmet from 'helmet';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(helmet());
app.use(express.json());
app.use('/products', productRoutes);

export default app;

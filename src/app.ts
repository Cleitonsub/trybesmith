import express from 'express';
import helmet from 'helmet';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import ordersRoutes from './routes/ordersRoutes';
import loginRoutes from './routes/loginRoutes';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const app = express();

app.use(helmet());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);

app.use(errorHandlerMiddleware);

export default app;

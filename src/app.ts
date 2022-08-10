import express from 'express';
import helmet from 'helmet';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const app = express();

app.use(helmet());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.use(errorHandlerMiddleware);

export default app;

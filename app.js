import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRoutes from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import arcjetMiddleware from './middleware/arcjet.middleware.js';
import worfkflowRouter from './routes/workflow.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', subscriptionRoutes);
app.use('/api/v1/workflows', worfkflowRouter);

app.use(errorMiddleware);

app.get('/',(req, res)=> {
    res.send('Welcome to my home page');
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectToDatabase();

});

export default app;


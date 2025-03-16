import { Router } from 'express';
import { getUsers, getUser } from '../controller/user.controller.js';
import authorize from '../middleware/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);
userRouter.post('/', authorize, (req, res) => res.send({title: 'CREATE new user'}));

userRouter.put('/:id', (req, res) => res.send({title: 'UPDATE user'}));
 
userRouter.delete('/:id', (req, res) => res.send({title: 'DELETE users'}));

export default userRouter;


import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import { createSubscription, getUserSubscription } from '../controller/subscription.controller.js';

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', (req, res) => res.send({title:"GET all subscriptions"}));
subscriptionRoutes.get('/:id', (req, res) => res.send({title: 'Get subscription details'}) )
subscriptionRoutes.post('/', authorize, createSubscription);
subscriptionRoutes.put('/:id', (req, res) => res.send({title: 'Update subscription '}) )
subscriptionRoutes.delete('/:id', (req, res) => res.send({title: 'Delete subscription'}) )
subscriptionRoutes.get('/user/:id', authorize, getUserSubscription);
subscriptionRoutes.put('/:id/cancel', (req, res) => res.send({title: 'Cancel subscription'}) )


export default subscriptionRoutes;


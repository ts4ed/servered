import { Router } from 'express';
import PostControler from './PostControler.js';
import OrderControler from './OrderControler.js';

const router = new Router();

router.post('/posts', PostControler.create);
router.get('/posts', PostControler.getAll);
router.get('/posts/:id', PostControler.getOn);
router.put('/posts', PostControler.update);
router.delete('/posts/:id', PostControler.delete);
router.post('/orders', OrderControler.create);
router.get('/orders', OrderControler.getAll);

export default router;

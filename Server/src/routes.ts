import express from 'express';

import PointController from './controllers/points_controller';
import ItemsController from './controllers/items_controller';

const router = express.Router();
const pointController = new PointController();
const itemsController = new ItemsController();

router.get('/items', itemsController.index);
router.post('/points', pointController.create);
router.get('/points', pointController.index);
router.get('/points/:id', pointController.show);


export default router;
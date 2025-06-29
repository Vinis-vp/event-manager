import express from 'express';
import * as EventController from '../controllers/events.controller.js';
import { authenticateToken, onlyOrganizer } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authenticateToken, EventController.list);
router.post('/', authenticateToken, onlyOrganizer, EventController.create);
router.put('/:id', authenticateToken, onlyOrganizer, EventController.update);
router.delete('/:id', authenticateToken, onlyOrganizer, EventController.remove);

export default router;

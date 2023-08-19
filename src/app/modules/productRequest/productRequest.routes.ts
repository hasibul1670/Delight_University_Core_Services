import express from 'express';

import { ProductRequestController } from './productRequest.controller';

const router = express.Router();
router.post('/create-request', ProductRequestController.createProductRequest);
router.delete('/:id', ProductRequestController.deleteProductRequest);
router.get('/:id', ProductRequestController.getAllProductRequests);

export const ProductRequestRoutes = router;

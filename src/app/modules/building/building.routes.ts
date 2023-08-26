import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingControllers } from './building.contoller';
import { BuildingValidation } from './building.validation';

const router = express.Router();
router.post(
  '/create-building',
  validateRequest(BuildingValidation.createValidation),
  BuildingControllers.createBuilding
);

router.get('/', BuildingControllers.getAllBuildings);
router.get('/:id', BuildingControllers.getSingleBuilding);
router.delete('/:id', BuildingControllers.deleteBuilding);

router.patch(
  '/:id',
  validateRequest(BuildingValidation.updateValidation),
  BuildingControllers.updateBuilding
);

export const BuildingRoutes = router;

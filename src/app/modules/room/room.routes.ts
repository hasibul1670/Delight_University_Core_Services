import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { RoomValidation } from './room.validation';
import { RoomControllers } from './room.contoller';


const router = express.Router();
router.post(
  '/create-room',
  validateRequest(RoomValidation.createValidation),
  RoomControllers.createRoom
);

router.get('/', RoomControllers.getAllAcademicFaculties);
router.get('/:id', RoomControllers.getSingleRoom);
router.delete('/:id', RoomControllers.deleteRoom);

router.patch(
  '/:id',
  validateRequest(RoomValidation.updateValidation),
  RoomControllers.updateRoom
);

export const RoomRoutes = router;

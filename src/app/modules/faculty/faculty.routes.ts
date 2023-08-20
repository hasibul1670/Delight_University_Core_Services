import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validations';

const router = express.Router();
router.post(
  '/create-faculty',
  validateRequest(FacultyValidation.createValidation),
  FacultyController.createFaculty
);
router.get('/', FacultyController.getAllFaculties);

router.get('/:id', FacultyController.getSingleFaculty);

router.delete('/:id', FacultyController.deleteFaculty);
router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateValidation),
  FacultyController.updateFaculty
);

export const FacultyRoutes = router;

import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidation } from './student.validation';
import { StudentControllers } from './student.controller';


const router = express.Router();
router.post(
  '/create-student',
  validateRequest(StudentValidation.createValidationSchema),
  StudentControllers.createStudent
);
router.get('/', StudentControllers.getAllStudents);
router.get('/:id', StudentControllers.getSingleStudent);
router.patch(
  '/:id',
  validateRequest(StudentValidation.updateValidationSchema),
  StudentControllers.updateSingleStudent
);
router.delete('/:id', StudentControllers.deleteStudent);

export const StudentRoutes = router;

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { StudentControllers } from './student.controller';
import { StudentValidation } from './student.validation';

const router = express.Router();
router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
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

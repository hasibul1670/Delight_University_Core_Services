import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemster.validation';

const router = express.Router();
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createValidationSchema),
  AcademicSemesterControllers.createAcademicSemester
);
router.delete('/:id', AcademicSemesterControllers.deleteAcademicSemester);
router.get('', AcademicSemesterControllers.getAllAcademicSemesters);
router.get('/:id', AcademicSemesterControllers.getSingleAcademicSemester);

export const AcademicSemesterRoutes = router;

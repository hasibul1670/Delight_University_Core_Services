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
router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);
router.get('/:id', AcademicSemesterControllers.getSingleAcademicSemester);
router.get('/:id', AcademicSemesterControllers.updateSingleAcademicSemester);
router.delete('/:id', AcademicSemesterControllers.deleteAcademicSemester);

export const AcademicSemesterRoutes = router;

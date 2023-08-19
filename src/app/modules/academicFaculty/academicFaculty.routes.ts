import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyControllers } from './academicFaculty.contoller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();
router.post(
  '/create-academic-faculty',
  validateRequest(AcademicFacultyValidation.createValidation),
  AcademicFacultyControllers.createAcademicFaculty
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);
router.get('/:id', AcademicFacultyControllers.getSingleAcademicFaculty);
router.delete('/:id', AcademicFacultyControllers.deleteAcademicFaculty);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateValidation),
  AcademicFacultyControllers.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;

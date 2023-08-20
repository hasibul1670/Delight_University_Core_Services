import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validations';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllAcademicDepartments);
router.get('/:id', AcademicDepartmentController.getSingleAcademicDepartment);

router.post(
    '/create-dept',
    validateRequest(AcademicDepartmentValidation.createValidation),
    AcademicDepartmentController.createAcademicDepartment
);
router.patch(
    '/:id',
    validateRequest(AcademicDepartmentValidation.updateValidation),
    AcademicDepartmentController.updateAcademicDepartment
  );
  router.delete('/:id', AcademicDepartmentController.deleteAcademicDepartment);

export const AcademicDepartmentRoutes = router;
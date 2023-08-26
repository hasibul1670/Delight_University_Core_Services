import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseControllers } from './course.contoller';
import { CourseValidation } from './course.validation';

const router = express.Router();
router.post(
  '/create-course',
  validateRequest(CourseValidation.createValidation),
  CourseControllers.createcourse
);

router.get('/', CourseControllers.getAllCourses);
router.get('/:id', CourseControllers.getSingleCourse);
router.delete('/:id', CourseControllers.deleteCourse);

router.patch(
  '/:id',
  validateRequest(CourseValidation.updateValidation),
  CourseControllers.updateCourse
);

export const CourseRoutes = router;

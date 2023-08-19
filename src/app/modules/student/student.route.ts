import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();
router.get('/', StudentController.getAllStudents);
router.post('/create-student', StudentController.createStudent);
router.get('/:id', StudentController.getSingleStudent);
router.delete('/:id', StudentController.deleteStudent);

router.patch('/:id', StudentController.updateStudent);

export const StudentRoutes = router;

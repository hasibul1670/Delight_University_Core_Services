import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { courseFilterableFields } from './course.constants';
import { CourseServices } from './course.service';

const createcourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.createCourse(req.body);
  sendControllerResponse(res, 'course created successfully', result);
});

const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, courseFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await CourseServices.getAllCourses(filters, options);
  sendControllerResponse(res, 'courses fetched successfully', result);
});

const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourse(id);
  sendControllerResponse(res, 'A Single course fetched Successfully!', result);
});
const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCourse(id);
  sendControllerResponse(res, 'course Deleted Successfully!', result);
});
const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;
  const result = await CourseServices.updateCourse(id, newData);
  sendControllerResponse(res, 'course Updated Successfully!', result);
});

const assignFaculies = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CourseServices.assignFaculies(id, req.body.faculties);
  sendControllerResponse(res, 'Course faculty assigned successfully', result);
});

const removeFaculties = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CourseServices.removeFaculties(id, req.body.faculties);
  sendControllerResponse(res, 'Course faculty deleted successfully', result);
});

export const CourseControllers = {
  createcourse,
  getAllCourses,
  assignFaculies,
  removeFaculties,
  getSingleCourse,
  deleteCourse,
  updateCourse,
};

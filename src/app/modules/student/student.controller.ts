/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ApiError } from '../../../handlingError/ApiError';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { studentFilterableFields } from './student.constant';
import { StudentServices } from './student.services';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentServices.createStudent(req.body);
  sendControllerResponse(res, 'Student is Created Successfully!', result);
});

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await StudentServices.getAllStudents(filters, options);
  sendControllerResponse(res, 'Students retrieved successfully !', result);
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await StudentServices.deleteStudent(id);
  sendControllerResponse(res, ' Student Deleted successfully !', result);
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await StudentServices.getSingleStudent(id);

  if (!result) {
    throw new ApiError(404, 'Student  not found');
  }

  sendControllerResponse(res, 'Single Student retrieved successfully!', result);
});

const updateSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;
  const result = await StudentServices.updateSingleStudent(id, newData);
  sendControllerResponse(res, 'Single Student Updated  successfully !', result);
});

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateSingleStudent,
};

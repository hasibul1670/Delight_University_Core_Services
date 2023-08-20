import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { facultyFilterableFields } from './faculty.constants';
import { FacultyService } from './faculty.service';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.createFaculty(req.body);
  sendControllerResponse(res, 'Faculty  Created Successfully!', result);
});

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, facultyFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await FacultyService.getAllFaculties(filters, options);
  sendControllerResponse(
    res,
    'All Faculties Retrieved  Created Successfully!',
    result
  );
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FacultyService.getSingleFaculty(id);
  sendControllerResponse(
    res,
    'A Single Faculty Retrieved Successfully!',
    result
  );
});
const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FacultyService.deleteFaculty(id);
  sendControllerResponse(res, 'Faculty Deleted Successfully!', result);
});
const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;
  const result = await FacultyService.updateFaculty(id, newData);
  sendControllerResponse(res, 'Faculty Updated Successfully!', result);
});

export const FacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  deleteFaculty,
  updateFaculty,
};

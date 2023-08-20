import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { academicDepartmentFilterableFields } from './academicDepartment.contants';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicDepartmentService.createAcademicDepartment(
      req.body
    );
    sendControllerResponse(
      res,
      'Academic Department Created successfully',
      result
    );
  }
);

const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicDepartmentFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await AcademicDepartmentService.getAllAcademicDepartments(
      filters,
      options
    );
    sendControllerResponse(
      res,
      'All academic Department Retrieved successfully',
      result
    );
  }
);

const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.getSingleAcademicDepartment(
      id
    );
    sendControllerResponse(
      res,
      'A academic Semester retrieved Successfully!',
      result
    );
  }
);
const deleteAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.deleteAcademicDepartment(id);
    sendControllerResponse(
      res,
      'Academic Semester deleted Successfully!',
      result
    );
  }
);
const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await AcademicDepartmentService.updateAcademicDepartment(id,newData);
    sendControllerResponse(
      res,
      'Academic Semester Updated Successfully!',
      result
    );
  }
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  deleteAcademicDepartment,
  updateAcademicDepartment,
};

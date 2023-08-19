import { Request, Response } from 'express';
import { AcademicDepartment } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { default as sendReponse } from '../../../shared/sendResponse';
import { academicDepartmentFilterableFields } from './academicDepartment.contants';
import { AcademicDepartmentService } from './academicDepartment.service';

const sendAcademicDepartmentResponse = (
  res: Response,
  message: string,
  data: any,
  meta?: any
) => {
  sendReponse<AcademicDepartment>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message,
    data,
    meta,
  });
};

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicDepartmentService.insertIntoDB(req.body);
    sendAcademicDepartmentResponse(
      res,
      'Academic Semester is Created Successfully!',
      result
    );
  }
);

const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicDepartmentFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await AcademicDepartmentService.getAllFromDB(
      filters,
      options
    );
    sendAcademicDepartmentResponse(
      res,
      'Academic Semester  Created Successfully!',
      result
    );
  }
);

const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.getByIdFromDB(id);
    sendAcademicDepartmentResponse(
      res,
      'A academic Semester retrieved Successfully!',
      result
    );
  }
);
const deleteAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.getByIdFromDB(id);
    sendAcademicDepartmentResponse(
      res,
      'Academic Semester deleted Successfully!',
      result
    );
  }
);
const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.getByIdFromDB(id);
    sendAcademicDepartmentResponse(
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ApiError } from '../../../handlingError/ApiError';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { AcademicSemesterFilterAbleFileds } from './academicSemester.constant';
import { AcademicSemesterServices } from './academicSemester.services';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterServices.createAcademicSemester(
      req.body
    );
    sendControllerResponse(
      res,
      'Academic Semester Created Successfully!',
      result
    );
  }
);

const getAllAcademicSemesters = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, AcademicSemesterFilterAbleFileds);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    const result = await AcademicSemesterServices.getAllAcademicSemesters(
      filters,
      options
    );
    sendControllerResponse(
      res,
      'AcademicSemesters retrieved successfully !',
      result
    );
  }
);

const deleteAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterServices.deleteAcademicSemester(id);
    sendControllerResponse(
      res,
      ' AcademicSemester Deleted successfully !',
      result
    );
  }
);

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await AcademicSemesterServices.getSingleAcademicSemester(id);

    if (!result) {
      throw new ApiError(404, 'Academic semester not found');
    }

    sendControllerResponse(
      res,
      'Single AcademicSemester retrieved successfully!',
      result
    );
  }
);

const updateSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await AcademicSemesterServices.updateSingleAcademicSemester(
      id,
      newData
    );
    sendControllerResponse(
      res,
      'Single AcademicSemester Updated  successfully !',
      result
    );
  }
);

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  deleteAcademicSemester,
  updateSingleAcademicSemester,
};

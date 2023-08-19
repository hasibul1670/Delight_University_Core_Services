/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendReponse from '../../../shared/sendResponse';
import { AcademicSemesterFilterAbleFileds } from './academicSemester.constant';
import { AcademicSemesterServices } from './academicSemester.services';

const sendAcademicSemesterResponse = (
  res: Response,
  message: string,
  data: any,
  meta?: any
) => {
  sendReponse<AcademicSemester>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message,
    data,
    meta,
  });
};

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterServices.createAcademicSemester(
      req.body
    );
    sendAcademicSemesterResponse(
      res,
      'AcademicSemester is Created Successfully!',
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
    sendAcademicSemesterResponse(
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
    sendAcademicSemesterResponse(
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
    sendAcademicSemesterResponse(
      res,
      'Single AcademicSemester retrieved successfully !',
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
    sendAcademicSemesterResponse(
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

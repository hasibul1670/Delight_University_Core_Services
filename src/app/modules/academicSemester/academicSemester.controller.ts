/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendReponse from '../../../shared/sendResponse';
import { AcademicSemesterServices } from './academicSemester.services';

const sendAcademicSemesterResponse = (
  res: Response,
  message: string,
  data: any
) => {
  sendReponse<AcademicSemester>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message,
    data,
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
    const { id } = req.params;
    const result = await AcademicSemesterServices.getAllAcademicSemesters(id);
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

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  deleteAcademicSemester,
};

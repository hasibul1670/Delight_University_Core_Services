import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { academicFacultyFilterableFields } from './academicFaculty.constants';
import { AcademicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyServices.createAcademicFaculty(
      req.body
    );
    sendControllerResponse(
      res,
      'AcademicAcademicFaculty created successfully',
      result
    );
  }
);

const getAllAcademicFaculties = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicFacultyFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await AcademicFacultyServices.getAllAcademicFaculties(
      filters,
      options
    );
    sendControllerResponse(
      res,
      'AcademicFaculties fetched successfully',
      result
    );
  }
);

const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyServices.getSingleAcademicFaculty(id);
    sendControllerResponse(
      res,
      'A Single AcademicFaculty fetched Successfully!',
      result
    );
  }
);
const deleteAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyServices.deleteAcademicFaculty(id);
    sendControllerResponse(
      res,
      'AcademicFaculty Deleted Successfully!',
      result
    );
  }
);
const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await AcademicFacultyServices.updateAcademicFaculty(
      id,
      newData
    );
    sendControllerResponse(
      res,
      'AcademicFaculty Updated Successfully!',
      result
    );
  }
);

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  deleteAcademicFaculty,
  updateAcademicFaculty,
};

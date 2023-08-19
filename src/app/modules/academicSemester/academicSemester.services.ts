/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcademicSemester, PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../../../handlingError/ApiError';
import {
  buildOrderBy,
  buildWhereConditions,
} from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemeterFilterRequest } from './academicSemester.interface';

const prisma = new PrismaClient();

const createAcademicSemester = async (payload: AcademicSemester) => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      `Invalid Semester Code!! Code Will be : Autumn:01 |Summer: 02 |Fall:03 `
    );
  }

  try {
    return await prisma.academicSemester.create({ data: payload });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'Duplicate entry for academic semester');
    }
    throw error;
  }
};

const getAllAcademicSemesters = async (
  filters: IAcademicSemeterFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicSemester[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const whereConditions = buildWhereConditions(filters);
  const orderBy: any = buildOrderBy(options);

  const result = await prisma.academicSemester.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy,
  });

  const total = await prisma.academicSemester.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleAcademicSemester = async (id: string) => {
  const result = await prisma.academicSemester.findUnique({
    where: { id },
  });
  return result;
};

const deleteAcademicSemester = async (id: string) => {
  try {
    return await prisma.academicSemester.delete({
      where: { id },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Acadenic Semester Not Found !!!');
    }
  }
};

const updateSingleAcademicSemester = async (
  id: string,
  newData: Partial<AcademicSemester>
) => {
  try {
    const updatedSemester = await prisma.academicSemester.update({
      where: { id },
      data: newData,
    });

    return updatedSemester;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Academic Semester Not Found !!!');
    }
    throw error;
  }
};

export const AcademicSemesterServices = {
  createAcademicSemester,
  deleteAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};

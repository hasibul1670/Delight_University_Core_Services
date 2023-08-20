/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcademicSemester, PrismaClient } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { isTitleAndCodeChecked } from '../../../helpers/isTitleAndCodeChecked';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicSemesterSearchableFields } from './academicSemester.constant';
import { IAcademicSemeterFilterRequest } from './academicSemester.interface';

const prisma = new PrismaClient();

const createAcademicSemester = async (payload: AcademicSemester) => {
  isTitleAndCodeChecked(payload.title, payload.code);

  try {
    return await prisma.academicSemester.create({ data: payload });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This academic semester already exists');
    }
    throw error;
  }
};

const getAllAcademicSemesters = async (
  filters: IAcademicSemeterFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicSemester[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    academicSemesterSearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.academicSemester.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
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
      throw new ApiError(404, 'Academic Semester Not Found !!!');
    }
  }
};

const updateSingleAcademicSemester = async (
  id: string,
  newData: Partial<AcademicSemester>
) => {
  if (newData.title && newData.code) {
    isTitleAndCodeChecked(newData.title, newData.code);
  }

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

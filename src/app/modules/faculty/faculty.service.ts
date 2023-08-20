import { Faculty, PrismaClient } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { facultySearchableFields } from './faculty.constants';
import { IFacultyFilterRequest } from './faculty.interface';
const prisma = new PrismaClient();
const createFaculty = async (data: Faculty): Promise<Faculty> => {
  try {
    return await prisma.faculty.create({
      data,
      include: {
        academicFaculty: true,
        academicDepartment: true,
      },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Faculty Member already exists');
    }
    throw error;
  }
};

const getAllFaculties = async (
  filters: IFacultyFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Faculty[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    facultySearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.faculty.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.faculty.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleFaculty = async (id: string): Promise<Faculty | null> => {
  const result = await prisma.faculty.findUnique({
    where: {
      id,
    },
    include: {
      academicFaculty: true,
      academicDepartment: true,
    },
  });
  return result;
};
const deleteFaculty = async (id: string): Promise<Faculty | null> => {
  const result = await prisma.faculty.findUnique({
    where: {
      id,
    },
    include: {
      academicFaculty: true,
      academicDepartment: true,
    },
  });
  return result;
};
const updateFaculty = async (id: string): Promise<Faculty | null> => {
  const result = await prisma.faculty.findUnique({
    where: {
      id,
    },
    include: {
      academicFaculty: true,
      academicDepartment: true,
    },
  });
  return result;
};

export const FacultyService = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  deleteFaculty,
  updateFaculty,
};

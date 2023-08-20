import { AcademicFaculty, PrismaClient } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicFacultySearchableFields } from './academicFaculty.constants';
import { IAcademicFacultyFilterRequest } from './academicFaculty.interface';
const prisma = new PrismaClient();
const createAcademicFaculty = async (
  payload: AcademicFaculty
): Promise<AcademicFaculty> => {
  try {
    return await prisma.academicFaculty.create({ data: payload });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Academic Faculty is already Exist');
    }
    throw error;
  }
};
const getAllAcademicFaculties = async (
  filters: IAcademicFacultyFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicFaculty[]>> => {

  
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);


  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    academicFacultySearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.academicFaculty.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.academicFaculty.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleAcademicFaculty = async (
  id: string
): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicFaculty.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const deleteAcademicFaculty = async (id: string) => {
  try {
    return await prisma.academicFaculty.delete({
      where: { id },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Academic Faculty Not Found !!!');
    }
  }
};
const updateAcademicFaculty = async (
  id: string,
  newData: Partial<AcademicFaculty>
): Promise<AcademicFaculty | null> => {
  try {
    const updatedSemester = await prisma.academicFaculty.update({
      where: { id },
      data: newData,
    });

    return updatedSemester;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Academic Faculty is already Exist');
    }
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Academic Semester Not Found !!!');
    }
    throw error;
  }
};
export const AcademicFacultyServices = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  deleteAcademicFaculty,
  updateAcademicFaculty,
};

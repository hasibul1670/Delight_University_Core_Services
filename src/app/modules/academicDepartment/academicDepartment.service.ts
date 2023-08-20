import { AcademicDepartment, PrismaClient } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';

import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { academicDepartmentSearchableFields } from './academicDepartment.contants';
import { IAcademicDepartmentFilterRequest } from './academicDepartment.interface';

const prisma = new PrismaClient();
const createAcademicDepartment = async (
  data: AcademicDepartment
): Promise<AcademicDepartment> => {
  try {
    return await prisma.academicDepartment.create({
      data,
      include: {
        academicFaculty: true,
      },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Academic Department is already Exist');
    }
    throw error;
  }
};

const getAllAcademicDepartments = async (
  filters: IAcademicDepartmentFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicDepartment[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    academicDepartmentSearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.academicDepartment.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.academicDepartment.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleAcademicDepartment = async (
  id: string
): Promise<AcademicDepartment | null> => {
  const result = await prisma.academicDepartment.findUnique({
    where: {
      id,
    },
    include: {
      academicFaculty: true,
    },
  });
  return result;
};
const deleteAcademicDepartment = async (id: string) => {
  try {
    const result = await prisma.academicDepartment.delete({
      where: {
        id,
      },
      include: {
        academicFaculty: true,
      },
    });
    return result;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Academic Faculty Not Found !!!');
    }
  }
};
const updateAcademicDepartment = async (
  id: string,
  newData: Partial<AcademicDepartment>
): Promise<AcademicDepartment | null> => {
  try {
    const updatedDepartment = await prisma.academicDepartment.update({
      where: { id },
      data: newData,
      include: {
        academicFaculty: true,
      },
    });
    return updatedDepartment;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Academic Departmant is already Exist');
    }
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Academic Departmant  Not Found !!!');
    }
    throw error;
  }
};

export const AcademicDepartmentService = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  deleteAcademicDepartment,
  updateAcademicDepartment,
};

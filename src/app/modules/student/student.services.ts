/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient, Student } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import {
  buildOrderBy,
  buildWhereConditions,
} from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IStudentFilterRequest } from './student.interface';

const prisma = new PrismaClient();

const createStudent = async (payload: Student): Promise<Student> => {
  try {
    const result = await prisma.student.create({
      data: payload,
      include: {
        academicFaculty: true,
        academicDepartment: true,
        academicSemester: true,
      },
    });
    return result;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'Duplicate entry for academic semester');
    }
    throw error;
  }
};

const getAllStudents = async (
  filters: IStudentFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Student[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const whereConditions = buildWhereConditions(filters);
  const orderBy: any = buildOrderBy(options);

  const result = await prisma.student.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy,
  });

  const total = await prisma.student.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleStudent = async (id: string) => {
  const result = await prisma.student.findUnique({
    where: { id },
  });
  return result;
};

const deleteStudent = async (id: string) => {
  try {
    return await prisma.student.delete({
      where: { id },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Acadenic Semester Not Found !!!');
    }
  }
};

const updateSingleStudent = async (id: string, newData: Partial<Student>) => {
  try {
    const updatedSemester = await prisma.student.update({
      where: { id },
      data: newData,
    });

    return updatedSemester;
  } catch (error) {
    console.log('Hello', error);
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Academic Semester Not Found !!!');
    }
    throw error;
  }
};

export const StudentServices = {
  createStudent,
  deleteStudent,
  getAllStudents,
  getSingleStudent,
  updateSingleStudent,
};

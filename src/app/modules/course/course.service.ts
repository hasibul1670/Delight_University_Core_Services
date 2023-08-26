/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Course, PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { courseSearchableFields } from './course.constants';
import { ICoursesCreateData, ICoursesFilterRequest } from './course.interface';

const prisma = new PrismaClient();
const createCourse = async (payload: ICoursesCreateData): Promise<any> => {
  const { preRequisiteCourses, ...courseData } = payload;

  try {
    const newCourse = await prisma.$transaction(async client => {
      const result = await client.course.create({ data: courseData });

      if (!result) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'Unable to create course');
      }
      //create PreReqCourse
      if (preRequisiteCourses && preRequisiteCourses.length > 0) {
        for (let i = 0; i < preRequisiteCourses.length; i++) {
          const createPreRequisite = await client.courseToPreRequisite.create({
            data: {
              courseId: result.id,
              preRequisiteId: preRequisiteCourses[i].courseId,
            },
          });
        }
      }
      return result;
    });

    if (newCourse) {
      const responseData = await prisma.course.findUnique({
        where: {
          id: newCourse.id,
        },
        include: {
          preRequisite: {
            include: {
              preRequisite: true,
            },
          },
          preRequisiteFor: {
            include: {
              course: true,
            },
          },
        },
      });
      return responseData;
    }

    throw new ApiError(StatusCodes.BAD_REQUEST, 'Unable to create course');
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Academic Faculty is already Exist');
    }
    throw error;
  }
};
const getAllCourses = async (
  filters: ICoursesFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Course[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    courseSearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.course.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.course.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleCourse = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const deleteCourse = async (id: string) => {
  try {
    return await prisma.course.delete({
      where: { id },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Courses Not Found !!!');
    }
  }
};
const updateCourse = async (
  id: string,
  newData: Partial<Course>
): Promise<Course | null> => {
  try {
    const updatedSemester = await prisma.course.update({
      where: { id },
      data: newData,
    });

    return updatedSemester;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Courses  is already Exist');
    }
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Courses  Not Found !!!');
    }
    throw error;
  }
};
export const CourseServices = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  deleteCourse,
  updateCourse,
};

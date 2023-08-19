/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcademicSemester, PrismaClient } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';

const prisma = new PrismaClient();

const createAcademicSemester = async (payload: AcademicSemester) => {
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


const getAllAcademicSemesters = async (id: string) => {
  const allRequest = await prisma.academicSemester.delete({});
  const filteredNotes = allRequest.filter(
    pr => pr.requestedId && pr.requestedId === id
  );
  return filteredNotes;
};

const getSingleAcademicSemester = async (id: string) => {
  const result = await prisma.academicSemester.findMany({ _id: id });
  return result;
};

const deleteAcademicSemester = async (id: string) => {
  const result = await prisma.academicSemester.find({ _id: id });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemester,
  deleteAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
};

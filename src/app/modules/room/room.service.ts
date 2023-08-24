import { PrismaClient, Room } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { roomSearchableFields } from './room.constants';
import { IRoomsFilterRequest } from './room.interface';

const prisma = new PrismaClient();
const createRoom = async (payload: Room): Promise<Room> => {
  try {
    return await prisma.room.create({
      data: payload,
      include: {
        building: true,
      },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Room is already Exist');
    }
    throw error;
  }
};
const getAllAcademicFaculties = async (
  filters: IRoomsFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Room[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    roomSearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.room.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.room.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleRoom = async (id: string): Promise<Room | null> => {
  const result = await prisma.room.findUnique({
    where: {
      id,
    },
    include: {
      building: true,
    },
  });
  return result;
};
const deleteRoom = async (id: string) => {
  try {
    return await prisma.room.delete({
      where: { id },
      include: {
        building: true,
      },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Rooms Not Found !!!');
    }
  }
};
const updateRoom = async (
  id: string,
  newData: Partial<Room>
): Promise<Room | null> => {
  try {
    const updatedSemester = await prisma.room.update({
      where: { id },
      data: newData,
      include: {
        building: true,
      },
    });

    return updatedSemester;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Rooms  is already Exist');
    }
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Rooms  Not Found !!!');
    }
    throw error;
  }
};
export const RoomServices = {
  createRoom,
  getAllAcademicFaculties,
  getSingleRoom,
  deleteRoom,
  updateRoom,
};

import { Building, PrismaClient } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { buildingSearchableFields } from './building.constants';
import { IBuildingsFilterRequest } from './building.interface';

const prisma = new PrismaClient();
const createBuilding = async (payload: Building): Promise<Building> => {
  try {
    return await prisma.building.create({ data: payload });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Academic Faculty is already Exist');
    }
    throw error;
  }
};
const getAllBuildings = async (
  filters: IBuildingsFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Building[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    buildingSearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.building.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.building.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleBuilding = async (id: string): Promise<Building | null> => {
  const result = await prisma.building.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const deleteBuilding = async (id: string) => {
  try {
    return await prisma.building.delete({
      where: { id },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Buildings Not Found !!!');
    }
  }
};
const updateBuilding = async (
  id: string,
  newData: Partial<Building>
): Promise<Building | null> => {
  try {
    const updatedSemester = await prisma.building.update({
      where: { id },
      data: newData,
    });

    return updatedSemester;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Buildings  is already Exist');
    }
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Buildings  Not Found !!!');
    }
    throw error;
  }
};
export const BuildingServices = {
  createBuilding,
  getAllBuildings,
  getSingleBuilding,
  deleteBuilding,
  updateBuilding,
};

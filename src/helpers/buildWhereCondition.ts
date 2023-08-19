import { AcademicSemesterSearchAbleFields } from '../app/modules/academicSemester/academicSemester.constant';
import { IAcademicSemeterFilterRequest } from '../app/modules/academicSemester/academicSemester.interface';
import { IPaginationOptions } from '../interfaces/pagination';

export const buildWhereConditions = (
  filters: IAcademicSemeterFilterRequest
) => {
  const { searchTerm, ...filterData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: AcademicSemesterSearchAbleFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  return andConditions.length > 0 ? { AND: andConditions } : {};
};

export const buildOrderBy = (options: IPaginationOptions) => {
  if (options.sortBy && options.sortOrder) {
    return {
      [options.sortBy]: options.sortOrder,
    };
  }
  return {
    createdAt: 'desc',
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
type SearchableField = string | number;
export const buildWhereConditions = (
  searchTerm?: any,
  filtersData?: any,
  searchableFields?: SearchableField[],
  sortBy?: number | string,
  sortOrder?: any
) => {
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: searchableFields?.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.keys(filtersData).map(key => ({
        [key]: {
          equals: (filtersData as any)[key],
        },
      })),
    });
  }

  const sortConditions: { [key: string]: string } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { AND: andConditions } : {};

  return {
    whereConditions,
    sortConditions,
  };
};

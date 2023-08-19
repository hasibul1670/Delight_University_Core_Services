import { StatusCodes } from 'http-status-codes';
import { academicSemesterTitleCodeMapper } from '../app/modules/academicSemester/academicSemester.constant';
import { ApiError } from '../handlingError/ApiError';

export const isTitleAndCodeChecked = (title: string, code: string) => {
  if (academicSemesterTitleCodeMapper[title] !== code) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      `Invalid Semester Code!! Code Will be : Autumn:01 |Summer: 02 |Fall:03 `
    );
  }
};

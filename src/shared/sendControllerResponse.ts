import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import sendReponse from './sendResponse';

export const sendControllerResponse = (
  res: Response<any, Record<string, any>>,
  message: string,
  data: any,
  meta?: any
) => {
  sendReponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message,
    data,
    meta,
  });
};

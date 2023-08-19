/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendReponse from '../../../shared/sendResponse';
import { IProductRequest } from './productRequest.interface';
import { ProductRequestService } from './productRequest.services';

const sendProductRequestResponse = (
  res: Response,
  message: string,
  data: any
) => {
  sendReponse<IProductRequest>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message,
    data,
  });
};

const createProductRequest = catchAsync(async (req: Request, res: Response) => {
  const { ...ProductRequestData } = req.body;
  const result = await ProductRequestService.createProductRequest(
    ProductRequestData
  );
  sendProductRequestResponse(
    res,
    'ProductRequest is Created Successfully!',
    result
  );
});

const getAllProductRequests = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ProductRequestService.getAllProductRequests(id);
    sendProductRequestResponse(
      res,
      'ProductRequests retrieved successfully !',
      result
    );
  }
);

const deleteProductRequest = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductRequestService.deleteProductRequest(id);
  sendProductRequestResponse(
    res,
    ' ProductRequest Deleted successfully !',
    result
  );
});
const getSingleProductRequest = catchAsync(
  async (req: Request, res: Response) => {
    const {id} = req.params;
    const result = await ProductRequestService.getSingleProductRequest(id);
    sendProductRequestResponse(
      res,
      'Single ProductRequest retrieved successfully !',
      result
    );
  }
);

export const ProductRequestController = {
  createProductRequest,
  getAllProductRequests,
  getSingleProductRequest,
  deleteProductRequest,
};

import { customDateFormat } from '../../../helpers/customDateFormat';
import { IProductRequest } from './productRequest.interface';
import { ProductRequest } from './productRequest.model';

const createProductRequest = async (
  payload: IProductRequest
): Promise<IProductRequest> => {
  const date = new Date();
  const formattedDate = customDateFormat(date);
  const productRequestPayload = { ...payload, requestedTime: formattedDate };
  const result = await ProductRequest.create(productRequestPayload);
  return result;
};

const getAllProductRequests = async (id: string) => {
  const allRequest = await ProductRequest.find({}).lean();
  const filteredNotes = allRequest.filter(
    pr => pr.requestedId && pr.requestedId === id
  );
  return filteredNotes;
};

const getSingleProductRequest = async (id: string) => {
  const result = await ProductRequest.findById({ _id: id });
  return result;
};

const deleteProductRequest = async (id: string) => {
  const result = await ProductRequest.findByIdAndDelete({_id: id });
  return result;
};

export const ProductRequestService = {
  createProductRequest,
  deleteProductRequest,
  getAllProductRequests,
  getSingleProductRequest,
};

import { Model } from 'mongoose';

export type IProductRequest = {

  productDescription: string;
  quantity: number;
  requestedId: string;
  requestedTime: string;
  status: string;

};


export type ProductRequestModel = Model<IProductRequest>;



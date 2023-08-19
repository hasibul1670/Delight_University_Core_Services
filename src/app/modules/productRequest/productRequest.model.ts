import { Schema, model } from 'mongoose';
import {
  IProductRequest,
  ProductRequestModel,
} from './productRequest.interface';

const ProductRequestSchema = new Schema<IProductRequest>(
  {
    quantity: {
      type: Number,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    requestedId: {
      type: String,
    },
    requestedTime: {
      type: String,
    },
    status: {
      type: String,
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

export const ProductRequest = model<IProductRequest, ProductRequestModel>(
  'ProductRequest',
  ProductRequestSchema
);

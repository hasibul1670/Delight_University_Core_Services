/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from 'mongoose';

export type IOrder = {
  orderedItems: Array<IOrderedItem>;
  shippingAddress: string;
  total?: number;
  contactNumber?: string;
  userId: string;
  orderDate:string;
  status:string;

};

export type OrderModel = Model<IOrder>;



export type IOrderedItem = {
  _id: string;
  name: string;
  productDescription: string;
  measurement: string;
  company: string;
  generic: string;
  category: string;
  price: number;
  country: string;
  url: string;
  id: number;
  quantity: number;
}
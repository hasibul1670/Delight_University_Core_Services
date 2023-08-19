/* eslint-disable no-unused-vars */

import { customDateFormat } from '../../../helpers/customDateFormat';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const date = new Date();
  const formattedDate = customDateFormat(date);
  const productRequestPayload = { ...payload, orderDate: formattedDate };

  const result = await Order.create(productRequestPayload);
  return result;
};

const getAllOrders = async (id: string) => {
  const allRequest = await Order.find({}).lean();
  const filteredNotes = allRequest.filter(pr => pr.userId && pr.userId === id);
  return filteredNotes;
};

const getSingleOrder = async (id: string) => {
  const result = await Order.findById(id).populate('course');

  return result;
};

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  createOrder,
  deleteOrder,
  getAllOrders,
  getSingleOrder,
};

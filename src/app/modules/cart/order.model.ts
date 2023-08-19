import { Schema, model } from 'mongoose';
import { IOrder, OrderModel } from './order.interface';

const ToySchema = new Schema({
  _id: String,
  name: String,
  productDescription: String,
  measurement: String,
  company: String,
  generic: String,
  category: String,
  price: Number,
  country: String,
  url: String,
  id: Number,
  quantity: Number,
});

const OrderSchema: Schema<IOrder> = new Schema<IOrder>(
  {
    orderedItems: [ToySchema],
    shippingAddress: { type: String },
    total: { type: Number },
    contactNumber: { type: String },
    userId: { type: String },
    orderDate: {
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

export const Order = model<IOrder, OrderModel>('Order', OrderSchema);

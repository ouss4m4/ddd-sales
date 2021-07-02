import { Schema, Document, model, Model } from "mongoose";

interface IOrder {
  ClientCode: string;
  Items: any[];
}
interface OrderBaseDocument extends IOrder, Document {}

interface OrderModel extends Model<OrderBaseDocument> {
  findByItemCode(id: string): Promise<OrderBaseDocument>;
}

const OrderSchema = new Schema(
  {
    ClientCode: { type: String, required: true },
    Items: { type: Array, default: [] },
  },
  { timestamps: true }
);

export const OrderModel = model<OrderBaseDocument, OrderModel>("Order", OrderSchema);

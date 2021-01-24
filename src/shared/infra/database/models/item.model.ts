import { Schema, Document, model, Model } from "mongoose";

interface IItem {
  itemName: string;
  itemCode: string;
  stockQty: number;
}
interface ItemBaseDocument extends IItem, Document {}

interface ItemModel extends Model<ItemBaseDocument> {
  findByItemCode(id: string): Promise<ItemBaseDocument>;
}

const ItemSchema = new Schema({
  itemName: { type: String, required: true },
  itemCode: { type: String, required: true, index: { unique: true } },
  stockQty: { type: Number, default: 0 },
});

ItemSchema.statics.findByItemCode = function findByItemCode(
  id: string,
  cb: any
): ItemBaseDocument {
  return this.findOne({ itemCode: id }, cb);
};

export const ItemModel = model<ItemBaseDocument, ItemModel>("Item", ItemSchema);

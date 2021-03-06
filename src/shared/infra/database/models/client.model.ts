import { Schema, Document, model, Model } from "mongoose";

interface IClient {
  clientName: string;
  clientCode: string;
  email: string;
}
interface ClientBaseDocument extends IClient, Document {}

interface ClientModel extends Model<ClientBaseDocument> {
  findByClientId(id: string): Promise<ClientBaseDocument>;
}

const ClientSchema = new Schema(
  {
    clientName: { type: String, required: true },
    clientCode: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

ClientSchema.statics.findByClientId = function findByClientId(id: string, cb: any): ClientBaseDocument {
  return this.findOne({ clientCode: id }, cb);
};

export const ClientModel = model<ClientBaseDocument, ClientModel>("Client", ClientSchema);

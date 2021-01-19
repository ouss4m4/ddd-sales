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

const ClientSchema = new Schema({
  clientName: { type: String, required: true },
  clientCode: { type: String, required: true },
  email: { type: String, required: true },
});

ClientSchema.statics.findByClientId = function findByClientId(
  id: string,
  cb: any
): ClientBaseDocument {
  return this.findOne({ clientId: id }, cb);
};

export const ClientModel = model<ClientBaseDocument, ClientModel>(
  "Client",
  ClientSchema
);

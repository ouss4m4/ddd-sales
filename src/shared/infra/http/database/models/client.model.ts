import { Schema, Document, model } from 'mongoose';

export interface IClientMongo extends Document {
  email: string;
  firstName: string;
  lastName: string;
}

const ClientSchema: Schema = new Schema({
  ClientCode: { type: String, required: true, unique: true },
  ClientName: { type: String, required: true },
});

export const ClientModel = model<IClientMongo>('Client', ClientSchema);

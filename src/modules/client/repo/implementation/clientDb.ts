import { ISuccess } from "../../../../shared/core/successResp";
import { ClientModel } from "../../../../shared/infra/database/models/client.model";
import { Client } from "../../domain/client";
import { CreateClientDTO } from "../../useCases/createClient/createClientDTO";
import { GetClientDTO } from "../../useCases/getClientDetails/getClientDTO";
import { IClientRepo } from "../clientRepo";

export class ClientRepo implements IClientRepo {
  public async delete(id: string): Promise<ISuccess> {
    try {
      const resp = await ClientModel.deleteOne({ _id: id });
      return { success: true };
    } catch (error) {
      throw new Error(error);
    }
  }
  public async create(data: CreateClientDTO): Promise<any> {
    // assume data is correct at this point.
    console.log("creating user", data);
    try {
      const client = await ClientModel.create(data);
      return client;
    } catch (error) {
      throw new Error(error);
    }
  }
  public async getDetails(data: GetClientDTO): Promise<Client> {
    console.log("getting client", data.clientCode);
    const res = await ClientModel.findByClientId(data.clientCode);
    console.log("res", res);
    if (res) {
      const client = Client.create(res);
      return client;
    } else {
      throw new Error("client not found");
    }
  }
}

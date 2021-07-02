import { ClientModel } from "../../../../shared/infra/database/models/client.model";
import { Client } from "../../domain/client.entity";
import { CreateClientDTO } from "../../useCases/createClient/createClientDTO";
import { GetClientDTO } from "../../useCases/getClientDetails/getClientDTO";
import { IClientRepo } from "../clientRepo";

export class ClientRepo implements IClientRepo {
  public async delete(id: string): Promise<any> {
    try {
      const resp = await ClientModel.deleteOne({ clientCode: id });
      return { success: resp, resp };
    } catch (error) {
      throw new Error(error);
    }
  }
  public async create(data: CreateClientDTO): Promise<Client> {
    // assume data is correct at this point.
    try {
      const clientDoc = await ClientModel.create(data);
      const client = Client.create(clientDoc);
      return client;
    } catch (error) {
      throw new Error(error);
    }
  }
  public async getDetails(data: GetClientDTO): Promise<Client> {
    try {
      const clientDoc = await ClientModel.findByClientId(data.clientCode);
      const client = Client.create(clientDoc);
      return client;
    } catch (error) {
      throw new Error(error);
    }
  }
}

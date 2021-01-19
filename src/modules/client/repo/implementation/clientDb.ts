import { ClientModel } from '../../../../shared/infra/http/database/models/client.model';
import { Client } from '../../domain/client';
import { GetClientDTO } from '../../useCases/getClientDetails/getClientDTO';
import { IClientRepo } from '../clientRepo';

export class ClientRepo implements IClientRepo {
  public async getClientDetails(data: GetClientDTO): Promise<Client> {
    const res = await ClientModel.find({});
    if (res.length) {
      const client = Client.create(res[0] as any);
      return client;
    } else {
      throw new Error('client not found');
    }
  }
}

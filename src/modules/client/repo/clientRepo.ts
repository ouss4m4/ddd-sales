import { ISuccess } from "../../../shared/core/successResp";
import { Client } from "../domain/client";
import { CreateClientDTO } from "../useCases/createClient/createClientDTO";
import { GetClientDTO } from "../useCases/getClientDetails/getClientDTO";

export interface IClientRepo {
  getDetails(data: GetClientDTO): Promise<Client>;
  create(data: CreateClientDTO): Promise<Client>;
  delete(id: string): Promise<ISuccess>;
}

import { Client } from "../domain/client";
import { CreateClientDTO } from "../useCases/createClient/CreateClientDTO";
import { GetClientDTO } from "../useCases/getClientDetails/getClientDTO";

export interface IClientRepo {
  getDetails(data: GetClientDTO): Promise<Client>;
  create(data: CreateClientDTO): Promise<Client>;
}

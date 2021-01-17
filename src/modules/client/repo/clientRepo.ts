import { Client } from "../domain/client";
import { GetClientDTO } from "../useCases/getClientDetails/getClientDTO";

export interface IClientRepo {
  getClientDetails(data: GetClientDTO): Promise<Client>;
}

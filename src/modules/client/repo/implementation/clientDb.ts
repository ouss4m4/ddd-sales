import { Client } from "../../domain/client";
import { GetClientDTO } from "../../useCases/getClientDetails/getClientDTO";
import { IClientRepo } from "../clientRepo";

export class ClientRepo implements IClientRepo {
  getClientDetails(data: GetClientDTO): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}

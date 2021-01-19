import { CreateClientUseCase } from "./createClient.usecase";
import { CreateClientController } from "./createClient.controller";
import { clientRepo } from "../../repo";

const createClientUseCase = new CreateClientUseCase(clientRepo);
export const createClientController = new CreateClientController(
  createClientUseCase
);

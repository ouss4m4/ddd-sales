import { DeleteClientUseCase } from "./deleteClient.usecase";
import { DeleteClientController } from "./deleteClient.controller";
import { clientRepo } from "../../repo";

const deleteClientUseCase = new DeleteClientUseCase(clientRepo);
export const deleteClientController = new DeleteClientController(
  deleteClientUseCase
);

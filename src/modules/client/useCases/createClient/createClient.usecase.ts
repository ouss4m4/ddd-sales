import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Client } from "../../domain/client.entity";
import { ClientRepo } from "../../repo/implementation/clientDb";
import { CreateClientDTO } from "./createClientDTO";
export class CreateClientUseCase
  implements UseCase<CreateClientDTO, Promise<Result<Client, UseCaseError>>> {
  constructor(private clientRepo: ClientRepo) {}
  public async execute(
    dto: CreateClientDTO
  ): Promise<Promise<Result<Client, UseCaseError>>> {
    // add value object validation
    try {
      const client = await this.clientRepo.create(dto);
      return new Success<Client>(client);
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

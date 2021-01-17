import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Client } from "../../domain/client";
import { IClientRepo } from "../../repo/clientRepo";
import { GetClientDTO } from "./getClientDTO";

export class GetClientDetails
  implements UseCase<GetClientDTO, Result<Client, UseCaseError>> {
  constructor(private clientRepo: IClientRepo) {}
  public async execute(
    dto: GetClientDTO
  ): Promise<Result<Client, UseCaseError>> {
    try {
      const client = await this.clientRepo.getClientDetails(dto);
      return new Success<Client>(client);
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

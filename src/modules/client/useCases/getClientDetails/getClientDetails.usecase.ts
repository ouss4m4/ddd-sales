import { Result } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Client } from "../../domain/client";
import { GetClientDTO } from "./getClientDTO";

export class GetClientDetails
  implements UseCase<GetClientDTO, Result<Client, UseCaseError>> {
  public async execute(
    dto: GetClientDTO
  ): Promise<Result<Client, UseCaseError>> {
    throw new Error("Method not implemented.");
  }
}

import { Fail, Result, Success } from "../../../../shared/core/result";
import { ISuccess } from "../../../../shared/core/successResp";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { ClientRepo } from "../../repo/implementation/clientDb";

export class DeleteClientUseCase
  implements UseCase<string, Promise<Result<ISuccess, UseCaseError>>> {
  constructor(private clientRepo: ClientRepo) {}
  public async execute(
    id: string
  ): Promise<Promise<Result<ISuccess, UseCaseError>>> {
    try {
      const resp = await this.clientRepo.delete(id);
      return new Success<ISuccess>({ success: true });
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

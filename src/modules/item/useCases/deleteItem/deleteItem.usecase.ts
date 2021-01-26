import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { IItemRepo } from "../../repo/itemRepo";
import { DeleteItemDTO } from "./deleteItemDTO";

export class DeleteItem implements UseCase<DeleteItemDTO, Result<any, UseCaseError>> {
  constructor(private itemRepo: IItemRepo) {}

  public async execute(dto: DeleteItemDTO) {
    try {
      const response = await this.itemRepo.delete(dto);
      return new Success<any>({ success: true });
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

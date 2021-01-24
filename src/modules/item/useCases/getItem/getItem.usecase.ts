import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Item } from "../../domain/item.entity";
import { IItemRepo } from "../../repo/itemRepo";
import { GetItemDTO } from "./getItemDTO";

export class GetClientDetails
  implements UseCase<GetItemDTO, Result<Item, UseCaseError>> {
  constructor(private itemRepo: IItemRepo) {}

  public async execute(data: GetItemDTO): Promise<Result<Item, UseCaseError>> {
    try {
      const item = await this.itemRepo.getById(data);
      return new Success<Item>(item);
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

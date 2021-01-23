import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Item } from "../../domain/item.entity";
import { IItemRepo } from "../../repo/itemRepo";
import { CreateItemDTO } from "./createItemDTO";

export class CreateItemUseCase
  implements UseCase<CreateItemDTO, Promise<Result<Item, UseCaseError>>> {
  constructor(private itemRepo: IItemRepo) {}
  public async execute(
    dto: CreateItemDTO
  ): Promise<Promise<Result<Item, UseCaseError>>> {
    try {
      const response = await this.itemRepo.create(dto);
      return new Success<Item>(Item.create(response));
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

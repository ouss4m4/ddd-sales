import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Item } from "../../domain/item.entity";
import { IItemRepo } from "../../repo/itemRepo";
import { EditItemDTO } from "./editItemDTO";

export class EditItem
  implements UseCase<EditItemDTO, Result<Item, UseCaseError>> {
  constructor(private itemRepo: IItemRepo) {}

  public async execute(dto: EditItemDTO) {
    try {
      const response = await this.itemRepo.edit(dto);
      return new Success<Item>(response);
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

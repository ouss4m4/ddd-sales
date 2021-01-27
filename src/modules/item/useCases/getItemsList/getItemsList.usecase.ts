import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Item } from "../../domain/item.entity";
import { IItemRepo } from "../../repo/itemRepo";
import { GetItemsListDTO } from "./getItemsListDTO";

export class GetItemsListUseCase implements UseCase<GetItemsListDTO, Result<Item[], UseCaseError>> {
  constructor(private itemsRepo: IItemRepo) {}
  /*  execute(request?: GetItemsListDTO): Promise<Result<Item[], UseCaseError>> {
        throw new Error("Method not implemented.");
    } */

  public async execute(dto: GetItemsListDTO) {
    try {
      const itemsList = await this.itemsRepo.getList(dto);
      return new Success<Item[]>(itemsList);
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

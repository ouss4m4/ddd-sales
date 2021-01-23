import { CreateItemDTO } from "../useCases/createItem/createItemDTO";

export interface IItemRepo {
  create(dto: CreateItemDTO): Promise<any>;
}

import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Order } from "../../domain/order.entity";
import { IOrderRepo } from "../../repo/orderRepo";
import { CreateOrderDTO } from "./createOrderDTO";

export class CreateOrderUseCase implements UseCase<CreateOrderDTO, Result<Order, UseCaseError>> {
  constructor(private orderRepo: IOrderRepo) {}
  public async execute(dto: CreateOrderDTO): Promise<Result<Order, UseCaseError>> {
    try {
      const response = await this.orderRepo.create(dto);
      if (response.isSuccess()) {
        return response;
      } else {
        return new Fail<UseCaseError>(response.error);
      }
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

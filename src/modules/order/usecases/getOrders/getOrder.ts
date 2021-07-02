import { Fail, Result, Success } from "../../../../shared/core/result";
import { UseCase, UseCaseError } from "../../../../shared/core/usecase";
import { Order } from "../../domain/order.entity";
import { IOrderRepo } from "../../repo/orderRepo";

export class GetOrdersUseCase implements UseCase<any, Result<Order, UseCaseError>> {
  constructor(private orderRepo: IOrderRepo) {}
  public async execute(): Promise<Result<Order, UseCaseError>> {
    try {
      const response = await this.orderRepo.getAll();
      return new Success<Order>(response);
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

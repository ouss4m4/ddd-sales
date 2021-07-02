import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";
import { CreateOrderUseCase } from "./createOrder";
import { CreateOrderDTO } from "./createOrderDTO";

export class CreateOrderController extends BaseController {
  constructor(private useCase: CreateOrderUseCase) {
    super();
  }

  public async executeImpl(req: Request, res: Response): Promise<void> {
    const dto: CreateOrderDTO = req.body;

    const respOrError = await this.useCase.execute(dto);
    if (respOrError.isSuccess()) {
      this.ok(res, respOrError.value);
    } else {
      this.fail(res, respOrError.error.message);
    }
  }
}

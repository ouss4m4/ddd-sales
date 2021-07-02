import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";
import { GetOrdersUseCase } from "./getOrder";

export class GetOrdersController extends BaseController {
  constructor(private useCase: GetOrdersUseCase) {
    super();
  }

  public async executeImpl(req: Request, res: Response): Promise<void> {
    const respOrError = await this.useCase.execute();
    if (respOrError.isSuccess()) {
      this.ok(res, respOrError.value);
    } else {
      this.fail(res, respOrError.error.message);
    }
  }
}

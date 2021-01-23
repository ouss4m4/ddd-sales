import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";
import { CreateItemUseCase } from "./createItem.usecase";
import { CreateItemDTO } from "./createItemDTO";

export class CreateItemController extends BaseController {
  constructor(private useCase: CreateItemUseCase) {
    super();
  }

  public async executeImpl(req: Request, res: Response): Promise<void> {
    const dto: CreateItemDTO = req.body;

    const respOrError = await this.useCase.execute(dto);
    if (respOrError.isSuccess()) {
      this.ok(res, respOrError.value);
    } else {
      this.fail(res, respOrError.error.message);
    }
  }
}

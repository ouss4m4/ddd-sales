import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";
import { DeleteItem } from "./deleteItem.usecase";
import { DeleteItemDTO } from "./deleteItemDTO";

export class DeleteItemController extends BaseController {
  constructor(private useCase: DeleteItem) {
    super();
  }

  public async executeImpl(req: Request, res: Response): Promise<void> {
    const dto: DeleteItemDTO = { itemCode: req.params.id };
    try {
      const resOrError = await this.useCase.execute(dto);
      if (resOrError.isSuccess()) {
        this.ok(res, resOrError.value);
      } else {
        this.fail(res, resOrError.error.message);
      }
    } catch (error) {
      this.fail(res, error);
    }
  }
}

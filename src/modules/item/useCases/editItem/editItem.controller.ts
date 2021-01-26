import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";
import { EditItem } from "./editItem.usecase";
import { EditItemDTO } from "./editItemDTO";
export class EditItemController extends BaseController {
  constructor(private useCase: EditItem) {
    super();
  }

  public async executeImpl(req: Request, res: Response): Promise<void> {
    try {
      const dto: EditItemDTO = req.body;
      const resOrError = await this.useCase.execute(dto);
      if (resOrError.isSuccess()) {
        // add client mapper later to remove props
        this.ok(res, resOrError.value);
      } else {
        this.fail(res, resOrError.error.message);
      }
    } catch (error) {
      this.fail(res, error);
    }
  }
}

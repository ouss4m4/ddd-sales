import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";
import { GetItemsListUseCase } from "./getItemsList.usecase";
import { GetItemsListDTO } from "./getItemsListDTO";

export class GetItemsListController extends BaseController {
  constructor(private useCase: GetItemsListUseCase) {
    super();
  }

  public async executeImpl(req: Request, res: Response): Promise<void> {
    try {
      const dto: GetItemsListDTO = { itemName: req.query.name as string || '' };
      const resOrError = await this.useCase.execute(dto);
      if (resOrError.isSuccess()) {
        // add mapper later to remove props
        this.ok(res, resOrError.value);
      } else {
        this.fail(res, resOrError.error.message);
      }
    } catch (error) {
      this.fail(res, error);
    }
  }
}

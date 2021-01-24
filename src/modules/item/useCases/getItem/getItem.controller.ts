import { Request, Response } from "express";
import { Fail } from "../../../../shared/core/result";
import { UseCaseError } from "../../../../shared/core/usecase";
import { BaseController } from "../../../../shared/infra";
import { GetClientDetails } from "./getItem.usecase";
import { GetItemDTO } from "./getItemDTO";
export class GetItemController extends BaseController {
  constructor(private useCase: GetClientDetails) {
    super();
  }

  public async executeImpl(req: Request, res: Response) {
    try {
      const dto: GetItemDTO = { itemCode: req.params.id };
      const resOrError = await this.useCase.execute(dto);
      if (resOrError.isSuccess()) {
        // add client mapper later to remove props
        this.ok(res, resOrError.value);
      } else {
        this.fail(res, resOrError.error.message);
      }
    } catch (error) {
      return new Fail<UseCaseError>(error);
    }
  }
}

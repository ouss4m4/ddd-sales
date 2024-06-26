import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";
import { GetClientDetails } from "./getClientDetails.usecase";
import { GetClientDTO } from "./getClientDTO";

export class GetClientDetailsController extends BaseController {
  private useCase: GetClientDetails;
  constructor(useCase: GetClientDetails) {
    super();
    this.useCase = useCase;
  }

  public async executeImpl(req: Request, res: Response) {
    const dto: GetClientDTO = { clientCode: req.params.id };
    try {
      const resOrError = await this.useCase.execute(dto);
      if (resOrError.isSuccess()) {
        // add client mapper later
        this.ok(res, resOrError.value);
      } else {
        this.fail(res, resOrError.error.message);
      }
    } catch (err: any) {
      this.fail(res, err);
    }
  }
}

import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";

import { CreateClientUseCase } from "./createClient.usecase";
import { CreateClientDTO } from "./CreateClientDTO";

export class CreateClientController extends BaseController {
  constructor(private useCase: CreateClientUseCase) {
    super();
  }

  public async executeImpl(req: Request, res: Response): Promise<void> {
    const data: CreateClientDTO = req.body as CreateClientDTO;
    const resOrError = await this.useCase.execute(data);

    if (resOrError.isSuccess()) {
      this.ok(res, resOrError.value);
    } else {
      this.fail(res, resOrError.error.message);
    }
  }
}

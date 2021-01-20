import { Request, Response } from "express";
import { BaseController } from "../../../../shared/infra";
import { DeleteClientUseCase } from "./deleteClient.usecase";

export class DeleteClientController extends BaseController {
  private useCase: DeleteClientUseCase;

  constructor(useCase: DeleteClientUseCase) {
    super();
    this.useCase = useCase;
  }

  public async executeImpl(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;

    try {
      const resOrError = await this.useCase.execute(id);
      if (resOrError.isSuccess()) {
        // add client mapper later
        this.ok(res, resOrError.value);
      } else {
        this.fail(res, resOrError.error.message);
      }
    } catch (err) {
      this.fail(res, err);
    }
  }
}

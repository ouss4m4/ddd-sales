export interface UseCase<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse>;
}

interface IUseCaseError {
  message: string;
}

export abstract class UseCaseError implements IUseCaseError {
  public readonly message: string;

  constructor(message: string) {
    this.message = message;
  }
}

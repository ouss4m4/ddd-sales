interface clientProps {
  ClientName: string;
  ClientCode: string;
}

export class Client {
  private readonly props;
  private constructor(props: clientProps) {
    this.props = props;
  }

  public get ClientName() {
    return this.props.ClientName;
  }

  public get ClientCode() {
    return this.props.ClientCode;
  }

  public static create(data: clientProps) {
    return new Client(data);
  }
}

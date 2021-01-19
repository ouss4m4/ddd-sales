interface clientProps {
  clientName: string;
  clientCode: string;
  email: string;
}

export class Client {
  private readonly props;
  private constructor(props: clientProps) {
    this.props = props;
  }

  public get clientName() {
    return this.props.clientName;
  }

  public get email() {
    return this.props.email;
  }
  public get clientCode() {
    return this.props.clientCode;
  }

  public static create(data: clientProps) {
    return new Client(data);
  }
}

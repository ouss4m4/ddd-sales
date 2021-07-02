interface IOrderProps {
  ClientCode: string;
  Items: any[];
}

export class Order {
  private readonly props;
  private constructor(props: IOrderProps) {
    this.props = props;
  }

  public get ClientCode() {
    return this.props.ClientCode;
  }

  public get Items() {
    return this.props.Items;
  }

  public static create(data: IOrderProps) {
    return new Order(data);
  }
}

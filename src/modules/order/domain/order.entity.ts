interface IOrderProps {
  ClientCode: string;
  Items: any[];
}

export class Order {
  ClientCode: string;
  Items: any[];
  private constructor(props: IOrderProps) {
    this.ClientCode = props.ClientCode;
    this.Items = props.Items;
  }

  public static create(data: IOrderProps) {
    return new Order(data);
  }
}

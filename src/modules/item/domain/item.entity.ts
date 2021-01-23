interface itemProps {
  itemName: string;
  itemCode: string;
  stockQty: number;
}

export class Item {
  private readonly props;
  private constructor(props: itemProps) {
    this.props = props;
  }

  public get itemName() {
    return this.props.itemName;
  }

  public get itemCode() {
    return this.props.itemCode;
  }
  public get stockQty() {
    return this.props.stockQty;
  }

  public static create(data: itemProps) {
    return new Item(data);
  }
}

export class Title {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  static create(value: string) {
    const title = new Title(value);

    return title;
  }
}

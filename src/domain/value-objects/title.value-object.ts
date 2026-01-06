export class Title {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  static create(value: string) {
    if (value.length > 30)
      throw new Error('The title must not exceed 30 characters.');

    const title = new Title(value);

    return title;
  }
}

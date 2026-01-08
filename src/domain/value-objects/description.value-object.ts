import { DescriptionError } from '../errors/value-objects/description.errors';

export class Description {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  public static create(value: string) {
    if (value.length > 100) throw DescriptionError.maxLength();

    if (value.length === 0) throw DescriptionError.notEmpty();

    const description = new Description(value);

    return description;
  }
}

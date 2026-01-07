import { TitleError } from '../errors/value-objects/title.errors';

export class Title {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  static create(value: string) {
    if (value.length === 0) throw TitleError.notEmpty();

    if (value.length > 30) throw TitleError.maxLength();

    const title = new Title(value);

    return title;
  }
}

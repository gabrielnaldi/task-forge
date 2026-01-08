export class DescriptionError extends Error {
  private readonly _code: string;

  constructor(message: string, code: string) {
    super(message);

    this.name = 'DescriptionError';
    this._code = code;

    Object.setPrototypeOf(this, new.target.prototype);
  }

  get code() {
    return this._code;
  }

  public static maxLength() {
    const error = new DescriptionError(
      'Description must not exceed 100 characters!',
      'MAX_LENGTH_ERROR',
    );

    return error;
  }

  public static notEmpty() {
    const error = new DescriptionError(
      'Description must not be empty!',
      'NOT_EMPTY_ERROR',
    );

    return error;
  }
}

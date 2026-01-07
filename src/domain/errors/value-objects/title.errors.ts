export class TitleError extends Error {
  public readonly code: string;

  constructor(message: string, code: string) {
    super(message);

    this.code = code;

    Object.setPrototypeOf(this, new.target.prototype);
  }

  static maxLength(): TitleError {
    const error = new TitleError(
      'Title must not exceed 30 characters!',
      'MAX_LENGTH_ERROR',
    );

    return error;
  }
}

export class TitleError extends Error {
  readonly code: string;

  constructor(message: string, code: string) {
    super(message);

    this.code = code;
    this.name = 'TitleError';

    Object.setPrototypeOf(this, new.target.prototype);
  }

  static maxLength(): TitleError {
    const error = new TitleError(
      'Title must not exceed 30 characters!',
      'MAX_LENGTH_ERROR',
    );

    return error;
  }

  static notEmpty(): TitleError {
    const error = new TitleError('Title must not be empty!', 'NOT_EMPTY_ERROR');

    return error;
  }
}

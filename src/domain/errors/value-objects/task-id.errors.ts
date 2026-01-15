export class TaskIdError extends Error {
  private readonly _code: string;

  constructor(message: string, code: string) {
    super(message);

    this._code = code;
    this.name = 'TaskIdError';

    Object.setPrototypeOf(this, new.target.prototype);
  }

  public static notEmpty() {
    const error_message = 'Task id must not be empty!';

    const error_code = 'NOT_EMPTY_ERROR';

    const task_id_error = new TaskIdError(error_message, error_code);

    return task_id_error;
  }
}

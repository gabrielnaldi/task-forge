import { TaskIdError } from '../errors/value-objects/task-id.errors';

export class TaskId {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  public static create(value: string) {
    if (value.length === 0) throw TaskIdError.notEmpty();

    const task_id = new TaskId(value);

    return task_id;
  }
}

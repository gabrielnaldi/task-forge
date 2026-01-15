export class TaskId {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  public static create(value: string) {
    const task_id = new TaskId(value);

    return task_id;
  }
}

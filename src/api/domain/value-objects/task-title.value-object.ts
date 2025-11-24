export class TaskTitle {
  private readonly _value: string;

  constructor(title: string) {
    this._value = title;
  }

  get value() {
    return this._value;
  }

  // Factories
  static create(value: string) {
    const task_title = new TaskTitle(value);

    return task_title;
  }
}

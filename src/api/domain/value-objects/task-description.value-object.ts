export class TaskDescription {
  constructor(private readonly _value) {}

  get value() {
    return this._value;
  }

  // Factories
  public static create(description: string) {
    const task_description = new TaskDescription(description);

    return task_description;
  }
}

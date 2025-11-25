export class TaskDescription {
  constructor(private readonly _value) {}

  get value() {
    return this._value;
  }

  // Factories
  public static create(description: string) {
    this.validateDescriptionSize(description);

    const task_description = new TaskDescription(description);

    return task_description;
  }

  // Validations
  private static validateDescriptionSize(title: string) {
    if (title.trim().length < 3) {
      throw new Error('Task description must have at least 3 characters.');
    }

    if (title.trim().length > 100)
      throw new Error(
        'Task description should not have more than 100 characters.',
      );
  }
}

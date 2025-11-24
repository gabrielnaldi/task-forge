export class TaskTitle {
  private readonly _value: string;

  constructor(title: string) {
    this._value = title;
  }

  get value() {
    return this._value;
  }

  // Factories
  static create(title: string) {
    this.validateTitleSize(title);

    const task_title = new TaskTitle(title);

    return task_title;
  }

  // Validations
  private static validateTitleSize(title: string) {
    if (title.trim().length < 3) {
      throw new Error('Title must have at least 3 characters');
    }
  }
}

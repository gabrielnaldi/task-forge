export class TaskDescription {
  constructor(private readonly _value) {}

  get value() {
    return this._value;
  }
}

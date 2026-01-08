import { TaskContract } from '../contracts/task.contract';

export class Task {
  private readonly props: TaskContract;

  private constructor(props: TaskContract) {
    this.props = props;
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  static create(props: TaskContract) {
    const task = new Task(props);
    return task;
  }
}

import { TaskContract } from '../contracts/task.contract';

export class Task {
  private readonly props: TaskContract;

  private constructor(props: TaskContract) {
    this.props = props;
  }

  get title() {
    return this.props.title.value;
  }

  get description() {
    return this.props.description.value;
  }

  get status() {
    return this.props.status;
  }

  static create(props: TaskContract) {
    const task = new Task(props);
    return task;
  }
}

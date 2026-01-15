import { CreateTaskContract, TaskContract } from '../contracts/task.contract';
import { TaskStatusValues } from '../types/task-status.type';

export class Task {
  private readonly props: TaskContract;

  private constructor(props: TaskContract) {
    this.props = props;
  }

  get id() {
    return this.props.id.value;
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

  cancel() {
    this.props.status = TaskStatusValues.CANCELED;
  }

  complete() {
    this.props.status = TaskStatusValues.COMPLETED;
  }

  static create(props: CreateTaskContract) {
    const task_props: TaskContract = {
      status: TaskStatusValues.PENDING,
      ...props,
    };

    const task = new Task(task_props);

    return task;
  }
}

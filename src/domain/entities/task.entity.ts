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

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  cancel() {
    this.props.status = TaskStatusValues.CANCELED;

    this.props.updatedAt = new Date();
  }

  complete() {
    this.props.status = TaskStatusValues.COMPLETED;

    this.props.updatedAt = new Date();
  }

  static create(props: CreateTaskContract) {
    const now = new Date();

    const task_props: TaskContract = {
      status: TaskStatusValues.PENDING,
      createdAt: now,
      updatedAt: now,
      ...props,
    };

    const task = new Task(task_props);

    return task;
  }
}

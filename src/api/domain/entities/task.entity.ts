import {
  TaskContract,
  TaskCreateContract,
  TaskStatus,
} from '../contracts/task.contracts';

export class Task {
  private readonly props: TaskContract;

  constructor(props: TaskContract) {
    this.props = props;
  }

  // Actions
  changeStatus(status: TaskStatus) {
    this.props.status = status;
    this.touch();
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  // Getters
  get id() {
    return this.props.id;
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

  toJson() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  // Factories
  public static create(props: TaskCreateContract) {
    const now = new Date();

    return new Task({
      ...props,
      status: props.status || TaskStatus.PENDING,
      createdAt: props.createdAt || now,
      updatedAt: props.updatedAt || now,
    });
  }
}

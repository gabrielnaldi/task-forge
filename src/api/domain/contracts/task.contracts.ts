import { TaskDescription } from '../value-objects/task-description.value-object';
import { TaskTitle } from '../value-objects/task-title.value-object';

export enum TaskStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

export interface TaskContract {
  id: string;
  title: TaskTitle;
  description: TaskDescription;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskCreateContract {
  id: string;
  title: TaskTitle;
  description: TaskDescription;
  status?: TaskStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

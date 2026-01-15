import { TaskStatus } from '../types/task-status.type';
import { Description } from '../value-objects/description.value-object';
import { TaskId } from '../value-objects/task-id.value-object';
import { Title } from '../value-objects/title.value-object';

export interface TaskContract {
  id: TaskId;
  title: Title;
  description: Description;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskContract {
  id: TaskId;
  title: Title;
  description: Description;
}

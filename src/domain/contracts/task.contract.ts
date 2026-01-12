import { TaskStatus } from '../types/task-status.type';
import { Description } from '../value-objects/description.value-object';
import { Title } from '../value-objects/title.value-object';

export interface TaskContract {
  title: Title;
  description: Description;
  status: TaskStatus;
}

export interface CreateTaskContract {
  title: Title;
  description: Description;
}

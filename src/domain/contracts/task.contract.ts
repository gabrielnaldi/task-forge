import { TaskStatus } from '../types/task-status.type';
import { Description } from '../value-objects/description.value-object';
import { Title } from '../value-objects/title.value-object';

export interface TaskContract {
  id: string;
  title: Title;
  description: Description;
  status: TaskStatus;
}

export interface CreateTaskContract {
  id: string;
  title: Title;
  description: Description;
}

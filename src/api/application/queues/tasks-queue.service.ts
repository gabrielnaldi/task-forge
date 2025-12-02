import { TaskPublishedEvent } from '../events/tasks/task-published.event';

export abstract class TasksQueueService {
  abstract publish(event: TaskPublishedEvent): Promise<void>;
}

import { TaskPublishedEvent } from '@src/api/application/events/tasks/task-published.event';
import { TasksQueueService } from '@src/api/application/queues/tasks-queue.service';

export class InMemoryTasksQueueService implements TasksQueueService {
  private readonly events: TaskPublishedEvent[] = [];

  async publish(event: TaskPublishedEvent): Promise<void> {
    this.events.push(event);
  }

  public async getPublishedEvents() {
    return this.events;
  }
}

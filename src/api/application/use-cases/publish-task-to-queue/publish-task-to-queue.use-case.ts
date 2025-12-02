import { Injectable } from '@nestjs/common';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';
import { PublishTaskToQueueInput } from './publish-task-to-queue.input';
import { TasksQueueService } from '../../queues/tasks-queue.service';
import { TaskPublishedEvent } from '../../events/tasks/task-published.event';

@Injectable()
export class PublishTaskToQueueUseCase {
  constructor(
    private readonly tasksRepository: TasksRepository,
    private readonly queueService: TasksQueueService,
  ) {}

  public async execute(input: PublishTaskToQueueInput) {
    const task = await this.tasksRepository.findById(input.taskId);

    if (!task) throw new Error('Task not found.');

    const event: TaskPublishedEvent = {
      taskId: task.id,
      title: task.title,
      description: task.description,
      publishedAt: new Date(),
    };

    await this.queueService.publish(event);
  }
}

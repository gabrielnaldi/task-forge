import { Task } from '@src/api/domain/entities/task.entity';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';
import { TaskDescription } from '@src/api/domain/value-objects/task-description.value-object';
import { TaskTitle } from '@src/api/domain/value-objects/task-title.value-object';
import { IDGenerator } from '../service/id-generator.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateTaskUseCase {
  constructor(
    private readonly idGenerator: IDGenerator,
    private readonly tasksRepository: TasksRepository,
  ) {}

  public async execute(input: { title: string; description: string }) {
    const task_id = this.idGenerator.generate();
    const task_title = TaskTitle.create(input.title);
    const task_description = TaskDescription.create(input.description);
    const task = Task.create({
      id: task_id,
      title: task_title,
      description: task_description,
    });
    const saved_task = await this.tasksRepository.save(task);
    return saved_task;
  }
}

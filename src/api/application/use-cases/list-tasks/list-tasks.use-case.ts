import { Injectable } from '@nestjs/common';
import { Task } from '@src/api/domain/entities/task.entity';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';

@Injectable()
export class ListTasksUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  public async execute(): Promise<Task[]> {
    const tasks = await this.tasksRepository.findAll();
    return tasks;
  }
}

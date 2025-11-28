import { Injectable } from '@nestjs/common';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';
import { UpdateTaskStatusInput } from './update-task.input';

@Injectable()
export class UpdateTaskStatusUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  public async execute(input: UpdateTaskStatusInput) {
    const task = await this.tasksRepository.findById(input.taskId);

    if (!task) throw new Error('Task not found!');

    task.changeStatus(input.newStatus);

    const updated_task = await this.tasksRepository.save(task);

    return updated_task;
  }
}

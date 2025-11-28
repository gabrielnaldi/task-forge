import { Injectable } from '@nestjs/common';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';
import { DeleteTaskInput } from './delete-task.input';

@Injectable()
export class DeleteTaskUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  public async execute(input: DeleteTaskInput) {
    const task_found = await this.tasksRepository.findById(input.taskId);

    if (!task_found) throw new Error('Task not found!');

    await this.tasksRepository.delete(input.taskId);
  }
}

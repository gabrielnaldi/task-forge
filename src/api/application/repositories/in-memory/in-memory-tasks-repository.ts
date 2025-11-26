import { Task } from '@src/api/domain/entities/task.entity';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';

export class InMemoryTasksRepositories implements TasksRepository {
  private readonly tasks: Task[] = [];

  async save(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async delete(taskId: string): Promise<undefined> {
    this.tasks.filter(task => task.id !== taskId);
  }

  async findById(taskId: string): Promise<Task | null> {
    return this.tasks.find(task => task.id === taskId);
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }
}

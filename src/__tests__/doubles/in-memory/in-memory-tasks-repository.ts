import { Task } from '@src/api/domain/entities/task.entity';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';

export class InMemoryTasksRepository implements TasksRepository {
  private tasks: Task[] = [];

  async save(task: Task): Promise<Task> {
    const task_index = this.tasks.findIndex(t => t.id === task.id);

    // update
    if (task_index !== -1) this.tasks[task_index] = task;

    // create
    if (task_index === -1) this.tasks.push(task);

    return task;
  }

  async delete(taskId: string): Promise<undefined> {
    const tasks_filtered = this.tasks.filter(task => task.id !== taskId);
    this.tasks = tasks_filtered;
  }

  async findById(taskId: string): Promise<Task | null> {
    return this.tasks.find(task => task.id === taskId);
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }
}

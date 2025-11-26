import { Task } from '../entities/task.entity';

export abstract class TasksRepository {
  abstract save(task: Task): Promise<Task>;
  abstract delete(taskId: string): Promise<undefined>;
  abstract findById(taskId: string): Promise<Task | null>;
  abstract findAll(): Promise<Task[]>;
}

import { TaskStatus } from '@src/api/domain/contracts/task.contracts';

export interface UpdateTaskStatusInput {
  taskId: string;
  newStatus: TaskStatus;
}

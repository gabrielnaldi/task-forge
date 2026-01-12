export type TaskStatus = 'PENDING' | 'COMPLETED' | 'CANCELED';

export const TaskStatusValues: Record<string, TaskStatus> = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
};

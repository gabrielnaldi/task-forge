export type TaskStatus = 'PENDING' | 'COMPLETED' | 'CANCELED';

export const TaskStatusValues = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
} as const;

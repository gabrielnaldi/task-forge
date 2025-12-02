export interface TaskPublishedEvent {
  taskId: string;
  title: string;
  description: string;
  publishedAt: Date;
}

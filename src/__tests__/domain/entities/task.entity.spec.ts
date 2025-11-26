import {
  TaskContract,
  TaskStatus,
} from '@src/api/domain/contracts/task.contracts';
import { Task } from '@src/api/domain/entities/task.entity';
import { TaskDescription } from '@src/api/domain/value-objects/task-description.value-object';
import { TaskTitle } from '@src/api/domain/value-objects/task-title.value-object';

describe('Task entity tests', () => {
  const now = new Date();
  const task_data: TaskContract = {
    id: '1234',
    title: new TaskTitle('Task 1'),
    description: new TaskDescription('First task'),
    status: TaskStatus.PENDING,
    createdAt: now,
    updatedAt: now,
  };

  it('should create a task entity with all props', () => {
    const task = new Task(task_data);

    expect(task).toBeDefined();
    expect(task.id).toBe(task_data.id);
    expect(task.title).toBe(task_data.title.value);
    expect(task.description).toBe(task_data.description.value);
    expect(task.status).toBe(task_data.status);
    expect(task.createdAt).toBe(task_data.createdAt);
    expect(task.updatedAt).toBe(task_data.updatedAt);
  });

  it('should return all props from toJson() method', () => {
    const task = new Task(task_data);

    expect(task.toJson()).toEqual({
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    });
  });

  it('should update task status', async () => {
    const task = new Task(task_data);
    const updated_at_time = task.updatedAt.getTime();

    // await few moments
    await new Promise(resolve => setTimeout(resolve, 50));

    // validation before
    expect(task.status).toBe(TaskStatus.PENDING);
    task.changeStatus(TaskStatus.COMPLETED);

    // validation after
    expect(task.status).toBe(TaskStatus.COMPLETED);
    expect(task.updatedAt.getTime()).toBeGreaterThan(updated_at_time);
  });
});

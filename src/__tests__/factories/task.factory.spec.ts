import { Task } from '@src/domain/entities/task.entity';
import { TaskFactory } from './task.factory';

describe('Task - Factory', () => {
  it('should create a valid task', () => {
    const task = TaskFactory.makeTask();

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe('Task title - example');
    expect(task.description).toBe('Task description - example');
  });
});

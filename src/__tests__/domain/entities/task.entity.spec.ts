import { Task } from '@src/api/domain/entities/task.entity';

describe('', () => {
  it('should create a task entity', () => {
    const task = new Task();

    expect(task).toBeDefined();
  });
});

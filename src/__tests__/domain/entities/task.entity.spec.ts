import { Task } from '@src/domain/entities/task.entity';

describe('Task - Entity', () => {
  it('should create a task', () => {
    const task = Task.create({
      title: 'Task title example',
    });

    expect(task).toBeInstanceOf(Task);
  });
});

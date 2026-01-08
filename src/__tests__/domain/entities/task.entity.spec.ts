import { Task } from '@src/domain/entities/task.entity';

describe('Task - Entity', () => {
  it('should create a task', () => {
    const task = Task.create({
      title: 'Task title example',
    });

    expect(task).toBeInstanceOf(Task);
  });

  it('should make sure that a task has a title', () => {
    const title = 'Task title example';

    const input = { title };

    const task = Task.create(input);

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe(title);
  });
});

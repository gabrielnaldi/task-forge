import { TaskContract } from '@src/domain/contracts/task.contract';
import { Task } from '@src/domain/entities/task.entity';

describe('Task - Entity', () => {
  const TITLE_EXAMPLE = 'Task title - example';
  const DESCRIPTION_EXAMPLE = 'Task description - example';

  it('should create a task', () => {
    const task = Task.create({
      title: 'Task title example',
      description: DESCRIPTION_EXAMPLE,
    });

    expect(task).toBeInstanceOf(Task);
  });

  it('should make sure that a task has a title', () => {
    const title = 'Task title example';

    const input: TaskContract = { title, description: DESCRIPTION_EXAMPLE };

    const task = Task.create(input);

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe(title);
  });

  it('should make sure that a task has a description', () => {
    const description = 'Task description example';

    const input = { title: TITLE_EXAMPLE, description };

    const task = Task.create(input);

    expect(task.description).toBe(description);
  });
});

import { TaskContract } from '@src/domain/contracts/task.contract';
import { Task } from '@src/domain/entities/task.entity';
import { Title } from '@src/domain/value-objects/title.value-object';

describe('Task - Entity', () => {
  const VALID_TITLE = Title.create('Task title - example');
  const VALID_DESCRIPTION = 'Task description - example';

  it('should create a task', () => {
    const input = {
      title: VALID_TITLE,
      description: VALID_DESCRIPTION,
    };

    const task = Task.create(input);

    expect(task).toBeInstanceOf(Task);
  });

  it('should make sure that a task has a title', () => {
    const title = Title.create('Task title example');

    const input: TaskContract = { title, description: VALID_DESCRIPTION };

    const task = Task.create(input);

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe(title.value);
  });

  it('should make sure that a task has a description', () => {
    const description = 'Task description example';

    const input = { title: VALID_TITLE, description };

    const task = Task.create(input);

    expect(task.description).toBe(description);
  });
});

import { TaskContract } from '@src/domain/contracts/task.contract';
import { Task } from '@src/domain/entities/task.entity';
import { Title } from '@src/domain/value-objects/title.value-object';

describe('Task - Entity', () => {
  const TITLE_EXAMPLE = 'Task title - example';
  const DESCRIPTION_EXAMPLE = 'Task description - example';

  it('should create a task', () => {
    const title = Title.create(TITLE_EXAMPLE);

    const task = Task.create({
      title: title,
      description: DESCRIPTION_EXAMPLE,
    });

    expect(task).toBeInstanceOf(Task);
  });

  it('should make sure that a task has a title', () => {
    const title = Title.create('Task title example');

    const input: TaskContract = { title, description: DESCRIPTION_EXAMPLE };

    const task = Task.create(input);

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe(title.value);
  });

  it('should make sure that a task has a description', () => {
    const title = Title.create(TITLE_EXAMPLE);

    const description = 'Task description example';

    const input = { title, description };

    const task = Task.create(input);

    expect(task.description).toBe(description);
  });
});

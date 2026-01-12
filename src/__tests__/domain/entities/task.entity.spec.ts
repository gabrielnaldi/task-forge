import { TaskContract } from '@src/domain/contracts/task.contract';
import { Task } from '@src/domain/entities/task.entity';
import { TaskStatusValues } from '@src/domain/types/task-status.type';
import { Description } from '@src/domain/value-objects/description.value-object';
import { Title } from '@src/domain/value-objects/title.value-object';

describe('Task - Entity', () => {
  const VALID_TITLE = Title.create('Task title - example');
  const VALID_DESCRIPTION = Description.create('Task description - example');
  const DEFAULT_STATUS = TaskStatusValues.PENDING;

  it('should create a task', () => {
    const input: TaskContract = {
      title: VALID_TITLE,
      description: VALID_DESCRIPTION,
      status: DEFAULT_STATUS,
    };

    const task = Task.create(input);

    expect(task).toBeInstanceOf(Task);
  });

  it('should make sure that a task has a title', () => {
    const title = Title.create('Task title example');

    const input: TaskContract = {
      title,
      description: VALID_DESCRIPTION,
      status: DEFAULT_STATUS,
    };

    const task = Task.create(input);

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe(title.value);
  });

  it('should make sure that a task has a description', () => {
    const description = Description.create('Task description example');

    const status = DEFAULT_STATUS;

    const input = { title: VALID_TITLE, description, status };

    const task = Task.create(input);

    expect(task.description).toBe(description.value);
  });

  it('should make sure that a task has a status', () => {
    const input: TaskContract = {
      title: VALID_TITLE,
      description: VALID_DESCRIPTION,
      status: DEFAULT_STATUS,
    };

    const task = Task.create(input);

    expect(task.status).toBe(DEFAULT_STATUS);
  });
});

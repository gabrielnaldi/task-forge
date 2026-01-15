import { CreateTaskContract } from '@src/domain/contracts/task.contract';
import { Task } from '@src/domain/entities/task.entity';
import { TaskStatusValues } from '@src/domain/types/task-status.type';
import { Description } from '@src/domain/value-objects/description.value-object';
import { TaskId } from '@src/domain/value-objects/task-id.value-object';
import { Title } from '@src/domain/value-objects/title.value-object';

describe('Task - Entity', () => {
  const VALID_TASK_ID = TaskId.create('valid-task-id');

  const VALID_TITLE = Title.create('Task title - example');

  const VALID_DESCRIPTION = Description.create('Task description - example');

  const DEFAULT_STATUS = TaskStatusValues.PENDING;

  const VALID_CREATE_INPUT: CreateTaskContract = {
    id: VALID_TASK_ID,
    title: VALID_TITLE,
    description: VALID_DESCRIPTION,
  };

  it('should create a task', () => {
    const task = Task.create(VALID_CREATE_INPUT);

    expect(task).toBeInstanceOf(Task);
  });

  it('should allow to define task title', () => {
    const title = Title.create('Task title example');

    const input: CreateTaskContract = {
      ...VALID_CREATE_INPUT,
      title,
    };

    const task = Task.create(input);

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe(title.value);
  });

  it('should allow to define task description', () => {
    const description = Description.create('Task description example');

    const input = { ...VALID_CREATE_INPUT, description };

    const task = Task.create(input);

    expect(task.description).toBe(description.value);
  });

  it('should allow to define task id', () => {
    const valid_id = 'task-valid-id-1';

    const valid_task_id = TaskId.create(valid_id);

    const input = { ...VALID_CREATE_INPUT, id: valid_task_id };

    const task = Task.create(input);

    expect(task.id).toBe(valid_id);
  });

  it('should make sure that a task is created with PENDING status', () => {
    const task = Task.create(VALID_CREATE_INPUT);

    expect(task.status).toBe(DEFAULT_STATUS);
  });

  it('should be able to cancel a task', () => {
    const task = Task.create(VALID_CREATE_INPUT);

    task.cancel();

    expect(task.status).toBe(TaskStatusValues.CANCELED);
  });

  it('should be able to complete a task', () => {
    const task = Task.create(VALID_CREATE_INPUT);

    task.complete();

    expect(task.status).toBe(TaskStatusValues.COMPLETED);
  });
});

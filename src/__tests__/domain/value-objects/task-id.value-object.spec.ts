import { TaskIdError } from '@src/domain/errors/value-objects/task-id.errors';
import { TaskId } from '@src/domain/value-objects/task-id.value-object';

describe('TaskId - Value object', () => {
  it('should be able to create a TaskId', () => {
    const valid_id = 'valid-id';

    const task_id = TaskId.create(valid_id);

    expect(task_id.value).toBe(valid_id);
  });

  it('should not allow task id to be empty', () => {
    const invalid_id = '';

    expect(() => TaskId.create(invalid_id)).toThrow(TaskIdError);
  });
});

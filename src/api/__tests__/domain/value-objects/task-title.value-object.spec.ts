import { TaskTitle } from '@src/api/domain/value-objects/task-title.value-object';

describe('TaskTitle value-object tests', () => {
  it('should make a new TaskTitle', () => {
    const task_title = new TaskTitle();

    expect(task_title).toBeDefined();
  });

  it('should create a TaskTitle through factory', () => {
    const task_title = TaskTitle.create();

    expect(task_title).toBeDefined();
  });
});

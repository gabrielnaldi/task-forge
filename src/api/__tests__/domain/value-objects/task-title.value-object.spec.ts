import { TaskTitle } from '@src/api/domain/value-objects/task-title.value-object';

describe('TaskTitle value-object tests', () => {
  it('should make a new TaskTitle', () => {
    const value = 'Make new item';
    const task_title = new TaskTitle(value);

    expect(task_title).toBeDefined();
    expect(task_title.value).toBe(value);
  });

  it('should create a TaskTitle through factory', () => {
    const value = 'Make new item';
    const task_title = TaskTitle.create(value);

    expect(task_title).toBeDefined();
    expect(task_title.value).toBe(value);
  });
});

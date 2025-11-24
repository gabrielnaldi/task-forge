import { TaskDescription } from '@src/api/domain/value-objects/task-description.value-object';

describe('TaskDescription value-object tests', () => {
  it('should create a TaskDescription', () => {
    const description = 'Task description example';
    const task_description = new TaskDescription(description);

    expect(task_description).toBeDefined();
    expect(task_description.value).toBe(description);
  });
});

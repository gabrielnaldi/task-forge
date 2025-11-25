import { TaskDescription } from '@src/api/domain/value-objects/task-description.value-object';

describe('TaskDescription value-object tests', () => {
  it('should create a TaskDescription', () => {
    const description = 'Task description example';
    const task_description = new TaskDescription(description);

    expect(task_description).toBeDefined();
    expect(task_description.value).toBe(description);
  });

  it('should make a new task description through factory', () => {
    const description = 'Task description example';
    const task_description = TaskDescription.create(description);

    expect(task_description).toBeDefined();
    expect(task_description.value).toBe(description);
  });

  it('should not allow a task description to have less than 3 characters', () => {
    expect(() => TaskDescription.create('ab')).toThrow(
      'Task description must have at least 3 characters.',
    );
  });
});

import { Task } from '@src/domain/entities/task.entity';
import { TaskFactory } from './task.factory';
import { Title } from '@src/domain/value-objects/title.value-object';

describe('Task - Factory', () => {
  it('should create a valid task', () => {
    const task = TaskFactory.makeTask();

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe('Task title - example');
    expect(task.description).toBe('Task description - example');
  });

  it('should override task data', () => {
    const override_title = 'Override title';

    const override_description = 'Override description';

    const override_data = {
      title: Title.create(override_title),
      description: override_description,
    };

    const task = TaskFactory.makeTask(override_data);

    expect(task.description).toBe(override_description);
    expect(task.title).toBe(override_title);
  });
});

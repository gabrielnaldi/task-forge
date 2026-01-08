import { TaskContract } from '@src/domain/contracts/task.contract';
import { Task } from '@src/domain/entities/task.entity';
import { Title } from '@src/domain/value-objects/title.value-object';

type OverrideData = Partial<TaskContract>;

export class TaskFactory {
  private static makeTaskData(overrideData: OverrideData): TaskContract {
    const data: TaskContract = {
      title: Title.create('Task title - example'),
      description: 'Task description - example',
      ...overrideData,
    };

    return data;
  }

  public static makeTask(overrideData?: OverrideData) {
    const data = this.makeTaskData(overrideData);

    const task = Task.create(data);

    return task;
  }
}

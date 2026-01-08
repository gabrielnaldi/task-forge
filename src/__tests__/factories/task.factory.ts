import { TaskContract } from '@src/domain/contracts/task.contract';
import { Task } from '@src/domain/entities/task.entity';
import { Title } from '@src/domain/value-objects/title.value-object';

export class TaskFactory {
  private static makeTaskData(): TaskContract {
    const data: TaskContract = {
      title: Title.create('Task title - example'),
      description: 'Task description - example',
    };

    return data;
  }

  public static makeTask() {
    const data = this.makeTaskData();

    const task = Task.create(data);

    return task;
  }
}

import { Test } from '@nestjs/testing';
import { InMemoryTasksRepository } from '@src/api/application/repositories/in-memory/in-memory-tasks-repository';
import { ListTasksUseCase } from '@src/api/application/use-cases/list-tasks/list-tasks.use-case';
import { Task } from '@src/api/domain/entities/task.entity';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';
import { TaskDescription } from '@src/api/domain/value-objects/task-description.value-object';
import { TaskTitle } from '@src/api/domain/value-objects/task-title.value-object';

describe('ListTasksUseCase tests', () => {
  let useCase: ListTasksUseCase;
  let repository: TasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ListTasksUseCase,
        {
          provide: TasksRepository,
          useClass: InMemoryTasksRepository,
        },
      ],
    }).compile();

    useCase = module.get<ListTasksUseCase>(ListTasksUseCase);
    repository = module.get<InMemoryTasksRepository>(TasksRepository);

    // mock
    await repository.save(
      Task.create({
        id: 'task-1',
        title: TaskTitle.create('Title example'),
        description: TaskDescription.create('Description example'),
      }),
    );

    await repository.save(
      Task.create({
        id: 'task-2',
        title: TaskTitle.create('Title example'),
        description: TaskDescription.create('Description example'),
      }),
    );
  });

  it('should list all tasks', async () => {
    const tasks = await useCase.execute();

    expect(tasks.length).toBe(2);
    expect(tasks[0]).toBeInstanceOf(Task);
    expect(tasks[0].id).toBe('task-1');
  });
});

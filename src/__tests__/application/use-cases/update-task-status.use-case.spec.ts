import { Test } from '@nestjs/testing';
import { InMemoryTasksRepository } from '@src/api/application/repositories/in-memory/in-memory-tasks-repository';
import { UpdateTaskStatusUseCase } from '@src/api/application/use-cases/update-task-status/update-task-status.use-case';
import { TaskStatus } from '@src/api/domain/contracts/task.contracts';
import { Task } from '@src/api/domain/entities/task.entity';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';
import { TaskDescription } from '@src/api/domain/value-objects/task-description.value-object';
import { TaskTitle } from '@src/api/domain/value-objects/task-title.value-object';

describe('UpdateTaskStatusUseCase tests', () => {
  let useCase: UpdateTaskStatusUseCase;
  let repository: TasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UpdateTaskStatusUseCase,
        {
          provide: TasksRepository,
          useClass: InMemoryTasksRepository,
        },
      ],
    }).compile();

    useCase = module.get<UpdateTaskStatusUseCase>(UpdateTaskStatusUseCase);
    repository = module.get<InMemoryTasksRepository>(TasksRepository);

    // mock
    await repository.save(
      Task.create({
        id: 'task-1',
        title: TaskTitle.create('Title example'),
        description: TaskDescription.create('Description example'),
      }),
    );
  });

  it('should change a task status', async () => {
    const original_task = await repository.findById('task-1');
    const original_status = original_task.status;

    await useCase.execute({
      taskId: 'task-1',
      newStatus: TaskStatus.CANCELED,
    });

    const updated_task = await repository.findById('task-1');

    expect(original_status).toBe(TaskStatus.PENDING);
    expect(updated_task.status).toBe(TaskStatus.CANCELED);
  });
});

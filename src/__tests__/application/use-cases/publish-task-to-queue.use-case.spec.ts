import { Test } from '@nestjs/testing';
import { InMemoryTasksQueueService } from '@src/__tests__/doubles/in-memory/services/in-memory-tasks-queue.service';
import { TasksQueueService } from '@src/api/application/queues/tasks-queue.service';
import { PublishTaskToQueueUseCase } from '@src/api/application/use-cases/publish-task-to-queue/publish-task-to-queue.use-case';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';

describe('Use case - PublishTaskToQueue', () => {
  let useCase: PublishTaskToQueueUseCase;
  let queueService: InMemoryTasksQueueService;

  const MOCKED_TASKS_REPOSITORY = {
    findById: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PublishTaskToQueueUseCase,
        {
          provide: TasksQueueService,
          useClass: InMemoryTasksQueueService,
        },
        {
          provide: TasksRepository,
          useValue: MOCKED_TASKS_REPOSITORY,
        },
      ],
    }).compile();

    useCase = module.get<PublishTaskToQueueUseCase>(PublishTaskToQueueUseCase);
    queueService = module.get<InMemoryTasksQueueService>(TasksQueueService);
  });

  it('should throw if task does not exist', async () => {
    const task_id = '123';
    expect(() => useCase.execute({ taskId: task_id })).rejects.toThrow(
      'Task not found',
    );
  });

  it('should publish a task to queue', async () => {
    const task_id = '1';

    MOCKED_TASKS_REPOSITORY.findById.mockResolvedValue({ id: '1' });

    await useCase.execute({ taskId: task_id });

    const event = await queueService.getPublishedEvents();

    expect(event.length).toBe(1);
    expect(event[0].taskId).toBe(task_id);
  });
});

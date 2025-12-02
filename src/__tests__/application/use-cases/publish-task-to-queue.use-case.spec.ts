import { Test } from '@nestjs/testing';
import { PublishTaskToQueueUseCase } from '@src/api/application/use-cases/publish-task-to-queue/publish-task-to-queue.use-case';

describe('PublishTaskToQueueUseCase', () => {
  let useCase: PublishTaskToQueueUseCase;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PublishTaskToQueueUseCase],
    }).compile();

    useCase = module.get<PublishTaskToQueueUseCase>(PublishTaskToQueueUseCase);
  });

  it('should throw if task does not exist', async () => {
    const task_id = '123';
    expect(() => useCase.execute({ taskId: task_id })).rejects.toThrow(
      'Task not found',
    );
  });
});

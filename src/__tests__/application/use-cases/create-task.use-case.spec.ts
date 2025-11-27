import { Test } from '@nestjs/testing';
import { Task } from '@src/api/domain/entities/task.entity';
import { IDGenerator } from '@src/api/application/service/id-generator.service';
import { UUIDGenerator } from '@src/api/infra/services/uuid-generator.service';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';
import { InMemoryTasksRepositories } from '@src/api/application/repositories/in-memory/in-memory-tasks-repository';
import { CreateTaskUseCase } from '@src/api/application/use-cases/create-task/create-task.use-case';

describe('CreateTaskUseCase tests', () => {
  let useCase: CreateTaskUseCase;
  let tasksRepository: TasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateTaskUseCase,
        {
          provide: IDGenerator,
          useClass: UUIDGenerator,
        },
        {
          provide: TasksRepository,
          useClass: InMemoryTasksRepositories,
        },
      ],
    }).compile();

    useCase = module.get<CreateTaskUseCase>(CreateTaskUseCase);
    tasksRepository = module.get<InMemoryTasksRepositories>(TasksRepository);
  });

  it('should create a task', async () => {
    const title = 'Task 1';
    const description = 'First task';
    const save_result = await useCase.execute({ title, description });
    const search_result = await tasksRepository.findById(save_result.id);

    expect(save_result).toBeDefined();
    expect(save_result).toBeInstanceOf(Task);
    expect(save_result.title).toBe(title);
    expect(save_result.description).toBe(description);
    expect(search_result).toEqual(save_result);
  });
});

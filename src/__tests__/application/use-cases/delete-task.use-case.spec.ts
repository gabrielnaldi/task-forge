import { Test } from '@nestjs/testing';
import { InMemoryTasksRepository } from '@src/api/application/repositories/in-memory/in-memory-tasks-repository';
import { DeleteTaskUseCase } from '@src/api/application/use-cases/delete-task/delete-task.use-case';
import { Task } from '@src/api/domain/entities/task.entity';
import { TasksRepository } from '@src/api/domain/repositories/tasks.repository';
import { TaskDescription } from '@src/api/domain/value-objects/task-description.value-object';
import { TaskTitle } from '@src/api/domain/value-objects/task-title.value-object';

describe('DeleteTaskUseCase tests', () => {
  let useCase: DeleteTaskUseCase;
  let tasksRepository: TasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DeleteTaskUseCase,
        {
          provide: TasksRepository,
          useClass: InMemoryTasksRepository,
        },
      ],
    }).compile();

    useCase = module.get<DeleteTaskUseCase>(DeleteTaskUseCase);
    tasksRepository = module.get<InMemoryTasksRepository>(TasksRepository);

    // Mocks
    await tasksRepository.save(
      Task.create({
        id: '123',
        title: TaskTitle.create('Task title'),
        description: TaskDescription.create('task description'),
      }),
    );
  });

  it('should delete a task', async () => {
    const task_id = '123';
    const task_found = await tasksRepository.findById(task_id);
    const task_before_delete_action = task_found.toJson();

    await useCase.execute({ taskId: task_id });

    const task_after_delete_action = await tasksRepository.findById(task_id);

    expect(task_before_delete_action).toBeDefined();
    expect(task_before_delete_action.id).toBe(task_id);
    expect(task_after_delete_action).toBeUndefined();
  });
});

import { Test } from '@nestjs/testing';
import { UUID_V4_REGEX } from '@src/__tests__/domain/consts/regex';
import { IDGenerator } from '@src/api/application/service/id-generator.service';
import { UUIDGenerator } from '@src/api/infra/services/uuid-generator.service';

describe('UUIDGenerator tests', () => {
  let idGenerator: IDGenerator;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: IDGenerator,
          useClass: UUIDGenerator,
        },
      ],
    }).compile();

    idGenerator = module.get<UUIDGenerator>(IDGenerator);
  });

  it('should generate an uuid', () => {
    const uuid = idGenerator.generate();
    expect(uuid).toMatch(UUID_V4_REGEX);
  });
});

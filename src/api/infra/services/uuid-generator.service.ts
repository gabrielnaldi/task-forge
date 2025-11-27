import { IDGenerator } from '@src/api/application/service/id-generator.service';
import { v4 as uuidv4 } from 'uuid';

export class UUIDGenerator implements IDGenerator {
  generate(): string {
    const uuid = uuidv4();
    return uuid;
  }
}

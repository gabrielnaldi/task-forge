import { Injectable } from '@nestjs/common';
import { IDGenerator } from '@src/api/application/services/id-generator.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UUIDGenerator implements IDGenerator {
  generate(): string {
    const uuid = uuidv4();
    return uuid;
  }
}

import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class IdGenerator {
  generate(): string {
    const uuid = uuidv4();
    return uuid;
  }
}

import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { IdGenerator } from 'src/common/idGenerator';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService, IdGenerator],
})
export class AnimalsModule {}

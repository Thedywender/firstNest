import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsController } from './animals/animals.controller';
import { AnimalsService } from './animals/animals.service';

@Module({
  imports: [],
  controllers: [AppController, AnimalsController],
  providers: [AppService, AnimalsService],
})
export class AppModule {}

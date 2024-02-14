import { AnimalsService } from './animals.service';
import { AnimalsOmitId } from './interface-animals';

import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Put,
  Post,
} from '@nestjs/common';

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @HttpCode(202)
  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.animalsService.findById(id);
  }

  @Post()
  create(@Body() body: AnimalsOmitId) {
    const created = this.animalsService.create(body);
    return created;
  }

  @Put(':id/updateQuantity')
  updateQuantity(
    @Param('id') id: string,
    @Body() uppdate: { quantity: number },
  ) {
    this.animalsService.update(id, uppdate);
    return this.animalsService.findById(id);
  }
}

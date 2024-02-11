import { AnimalsData } from './data/animalData';
import { Animals, AnimalsOmitId } from 'src/interfaces/animal';

import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';

@Controller('animals')
export class AnimalsController {
  private animals: Animals[] = AnimalsData; // Armazenamento dos animais em memória

  constructor() {
    this.animals = AnimalsData;
  }

  @HttpCode(202)
  @Get()
  findAll() {
    return this.animals;
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const animal = this.animals.find((animal) => animal.id === id);
    if (!animal) {
      return { message: 'Animal not found' };
    }
    return animal;
  }

  @Put()
  create(@Body() body: AnimalsOmitId) {
    const animalId = (this.animals.length + 1).toString();
    const newAnimal = { id: animalId, ...body };
    this.animals.push(newAnimal);
    return newAnimal;
  }

  @Put(':id/updateQuantity')
  updateQuantity(@Param('id') id: string, @Body() body: { quantity: number }) {
    const animal = this.animals.find((animal) => animal.id === id); // Busca o animal pelo ID

    if (!animal) {
      return { message: 'Animal not found' }; // Retorna 'Animal not found' se não encontrar o animal
    }

    // Atualiza a quantidade do animal com a quantidade fornecida no corpo da solicitação
    animal.quantity += body.quantity;

    return { newQuantity: animal.quantity }; // Retorna a nova quantidade do animal
  }
}

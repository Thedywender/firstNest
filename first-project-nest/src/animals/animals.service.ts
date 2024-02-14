import { Injectable, NotFoundException } from '@nestjs/common';
// import { v4 as uuidv4 } from 'uuid';
import { Animals, AnimalsOmitId } from './interface-animals';
import { AnimalsData } from './data/animalData';
import { IdGenerator } from 'src/common/idGenerator';

@Injectable()
export class AnimalsService {
  private animals: Animals[] = AnimalsData; // Armazenamento dos animais em memória

  constructor(private idGenerator: IdGenerator) {}
  create(animal: AnimalsOmitId) {
    const uuid = this.idGenerator.generate();

    const created = {
      id: uuid,
      ...animal,
    };

    this.animals.push(created);
    return created;
  }

  update(id: string, quantity: number) {
    const animal = this.animals.find((animal) => animal.id === id);
    if (animal) {
      animal.quantity += quantity;
    }
  }

  findAll() {
    return this.animals;
  }

  findById(id: string) {
    const findAnimal = this.animals.find((animal) => animal.id === id);

    if (!findAnimal) throw new NotFoundException('Animal not found');

    return findAnimal;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Animals, AnimalsOmitId } from './interface-animals';
import { AnimalsData } from './data/animalData';

@Injectable()
export class AnimalsService {
  private animals: Animals[] = AnimalsData; // Armazenamento dos animais em memória
  create(animal: AnimalsOmitId) {
    const uuid = uuidv4();

    const created = {
      id: uuid,
      ...animal,
    };

    this.animals.push(created);
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

    if (!findAnimal) throw new NotFoundException();

    return findAnimal;
  }
}

import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';

@Controller('animals')
export class AnimalsController {
  @HttpCode(202) // um método padrão  para retornar um status para a response
  @Get() // estás implicito dentro dos pararenteses a rota '/'
  findAll() {
    return { animals: 'Animals must be defended' };
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return {
      id: id,
      name: 'Mico Leão Dourado',
      situation: 'almost extintion',
      quantity: 201,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: { quantity: number }) {
    const animalExisting = this.findById(id);

    if (!animalExisting) {
      return { message: 'Animal not foud' };
    }
    const newQuantity = animalExisting.quantity + body.quantity;
    return { newQuantity };
  }
}

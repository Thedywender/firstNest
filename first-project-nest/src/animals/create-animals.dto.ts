import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
  IsPositive,
} from 'class-validator';

export class Animals {
  id: string;
  @IsString({ message: 'Nome deve conster letras!' }) //dentro dos decorators pode-se colocar menssagens
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  situation: string;
  @IsNumber()
  @IsInt()
  @IsPositive()
  quantity: number;
}

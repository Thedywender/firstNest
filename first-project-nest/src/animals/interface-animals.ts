class Animals {
  id: string;

  name: string;

  situation: string;

  quantity: number;
}

// Define a interface AnimalsOmitId que omite a propriedade 'id' da interface Animals
interface AnimalsOmitId extends Omit<Animals, 'id'> {}

export { Animals, AnimalsOmitId };

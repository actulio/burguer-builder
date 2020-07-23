import React from 'react';
import { Add, Remove } from 'styled-icons/material';

import Burguer from '../Burguer';
import { Container, BuildControls, EditableIcon, Button } from './styles';

const INGREDIENTS = [
  {
    name: 'Salad',
    price: 1,
  },
  {
    name: 'Cheese',
    price: 1,
  },
  {
    name: 'Meat',
    price: 1,
  },
  {
    name: 'Bacon',
    price: 1,
  },
];

interface Props {
  name: string;
  add: (ingredient: string) => void;
  remove: (ingredient: string) => void;
}

const LineChoice = ({ name, add, remove }: Props) => {
  return (
    <div>
      <Button onClick={() => remove(name)}>
        <EditableIcon as={Remove} />
      </Button>
      <p>{name}</p>
      <Button onClick={() => add(name)}>
        <EditableIcon as={Add} />
      </Button>
    </div>
  );
};

const BurguerBuilder: React.FC = () => {
  const [ingredients, setIngredients] = React.useState<string[]>([
    'BreadTop',
    'BreadBottom',
  ]);

  function addIngredient(ingredient: string) {
    const x = ingredients.slice(1, -1);
    x.unshift(ingredient);
    setIngredients(['BreadTop', ...x, 'BreadBottom']);
  }

  function removeIngredient(ingredient: string) {
    const index = ingredients.indexOf(ingredient);

    if (index >= 0) {
      const updatedIngredients = [...ingredients];
      updatedIngredients.splice(index, 1);
      setIngredients(updatedIngredients);
    }
  }

  return (
    <Container>
      <Burguer ingredients={ingredients} />
      <BuildControls>
        {INGREDIENTS.map((e) => {
          return (
            <LineChoice
              key={e.name}
              name={e.name}
              add={addIngredient}
              remove={removeIngredient}
            />
          );
        })}
      </BuildControls>
    </Container>
  );
};

export default BurguerBuilder;

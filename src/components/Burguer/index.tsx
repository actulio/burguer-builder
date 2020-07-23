import React from 'react';

import { Container, BurguerContainer } from './styles';
import {
  Bacon,
  BreadBottom,
  BreadTop,
  Cheese,
  Meat,
  Salad,
} from './ingredients';

// import { ReactComponent as BreadBottom } from '../../assets/breadBottom.svg';
// import { ReactComponent as BreadTop } from '../../assets/breadTop.svg';
// import { ReactComponent as Cheese } from '../../assets/cheese.svg';
// import { ReactComponent as Meat } from '../../assets/meat.svg';
// import { ReactComponent as Salad } from '../../assets/salad.svg';
// import { ReactComponent as Bacon } from '../../assets/bacon.svg';

interface Props {
  ingredients: string[];
}

const Burguer = ({ ingredients }: Props) => {
  function mapIngredientToComponent(ingredient: string) {
    const components = {
      Bacon,
      BreadBottom,
      BreadTop,
      Cheese,
      Meat,
      Salad,
    };
    return components[ingredient] || null;
  }

  return (
    <Container>
      <BurguerContainer>
        {ingredients.map((e, idx) => {
          const Ingredient = mapIngredientToComponent(e);
          return Ingredient ? (
            <Ingredient
              // eslint-disable-next-line react/no-array-index-key
              key={`${e}-${idx}`}
              bottom={`${idx * 30}px`}
              zIndex={ingredients.length - idx}
            />
          ) : null;
        })}
      </BurguerContainer>
    </Container>
  );
};

export default Burguer;

import styled from 'styled-components';

import breadBottom from '../../assets/breadBottom.png';
import breadTop from '../../assets/breadTop.png';
import cheese from '../../assets/cheese.png';
import meat from '../../assets/meat.png';
import salad from '../../assets/salad.png';
import bacon from '../../assets/bacon.png';

interface Props {
  bottom: string;
  zIndex: number;
}

const Ingredient = styled.div`
  width: 200px;
  height: 100px;
  background-repeat: none;
  margin: 0px auto;
  background-size: 100% 100%;
  position: absolute;
  z-index: ${(props: Props) => props.zIndex};
  top: ${(props: Props) => props.bottom};
`;

export const BreadTop = styled(Ingredient)`
  background-image: url(${breadTop});
`;

export const BreadBottom = styled(Ingredient)`
  background-image: url(${breadBottom});
`;

export const Meat = styled(Ingredient)`
  background-image: url(${meat});
`;

export const Cheese = styled(Ingredient)`
  background-image: url(${cheese});
  width: 210px;
  height: 100px;
  left: -5px;
`;

export const Salad = styled(Ingredient)`
  background-image: url(${salad});
`;

export const Bacon = styled(Ingredient)`
  background-image: url(${bacon});
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* width: 100%; */
`;

export const BuildControls = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  > div {
    padding: 5px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  background-color: var(--secondary);
  > svg {
    fill: var(--primary);
    width: 20px;
    height: 20px;
  }
`;

export const EditableIcon = styled.i`
  width: 100%;
  height: 100%;
`;

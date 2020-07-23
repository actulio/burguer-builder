import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */

  border: 1px solid red;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 350px) {
    width: 300px;
    height: 250px;
  }

  @media (min-width: 499px) {
    width: 400px;
    height: 350px;
  }

  @media (min-width: 1000px) {
    width: 700px;
    height: 500px;
  }
`;

export const BurguerContainer = styled.div`
  position: relative;
  width: 200px;
  height: auto;
  margin: 0 auto;
`;

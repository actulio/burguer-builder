import styled, { css } from 'styled-components';

export const Navbar = styled.div`
  background-color: var(--primary);
  position: fixed;
  transition: width 600ms;
  z-index: 10;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  svg {
    color: var(--secondary);
    filter: grayscale(100%) opacity(0.7);
  }

  /* small screens */
  @media (max-width: 599px) {
    bottom: 0;
    width: 100vw;
    height: 4rem;
    li:first-child {
      display: none;
    }
    ul {
      flex-direction: row;
    }
    a {
      justify-content: center;
      align-items: center;
    }
    li:last-child {
      margin: 0;
    }
  }

  /* large screens */
  @media (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;

    li:first-child svg {
      transition: 600ms;
      transform: rotate(0deg);
    }

    &:hover {
      width: 11rem;
      li:first-child svg {
        transform: rotate(-180deg);
      }
      span {
        display: inline;
      }
    }
  }
`;

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const liDefault = css`
  width: 100%;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    height: 3rem;
    text-decoration: none;
  }
  span {
    color: var(--secondary);
    display: none;
    filter: grayscale(100%) opacity(0.7);
  }
  svg {
    color: var(--light-hover);
    width: 3rem;
    height: 3rem;
    filter: grayscale(100%) opacity(0.7);
  }

  &:hover svg,
  span {
    filter: grayscale(0%) opacity(1);
  }
`;

export const Logo = styled.li`
  ${liDefault};

  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0.3ch;
  background-color: #000004;

  span {
    text-transform: uppercase;
    width: 80%;
  }
`;

export const NavbarItem = styled.li`
  ${liDefault};
  padding: 1rem;
  span {
    margin-left: 2rem;
  }

  &:hover {
    background-color: #000004;
  }
  &:last-child {
    margin-top: auto;
  }
`;

export const EditableIcon = styled.i`
  width: 100%;
  height: 100%;
`;

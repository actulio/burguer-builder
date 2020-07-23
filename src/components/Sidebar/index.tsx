/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Hamburger, AngleDoubleRight, SignInAlt } from '@styled-icons/fa-solid';
import { Github } from '@styled-icons/fa-brands';
import { StyledIcon } from '@styled-icons/styled-icon';

import { Container, Navbar, NavbarItem, Logo, EditableIcon } from './styles';

interface ItemProps {
  link: string;
  icon: StyledIcon;
  text: string;
}

const Item = ({ link, icon, text }: ItemProps) => {
  return (
    <a href={link}>
      <EditableIcon as={icon} />
      <span>{text}</span>
    </a>
  );
};

const Sidebar: React.FC = () => {
  return (
    <Navbar>
      <Container>
        <Logo>
          <a href="/">
            <span>Burguer Builder</span>
            <EditableIcon as={AngleDoubleRight} />
          </a>
        </Logo>
        <NavbarItem>
          <Item link="/" text="Build" icon={Hamburger} />
        </NavbarItem>
        <NavbarItem>
          <Item link="/" text="Login" icon={SignInAlt} />
        </NavbarItem>
        <NavbarItem>
          <Item link="/" text="Github" icon={Github} />
        </NavbarItem>
      </Container>
    </Navbar>
  );
};

export default Sidebar;

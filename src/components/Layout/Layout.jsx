import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  NavItem,
  NavList,
  Navigation,
  StyledLink,
} from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavList>
            <NavItem>
              <StyledLink to="/">Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/movies">Movies</StyledLink>
            </NavItem>
          </NavList>
        </Navigation>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
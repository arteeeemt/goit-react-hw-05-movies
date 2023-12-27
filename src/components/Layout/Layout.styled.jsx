import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
`;
export const Header = styled.header`
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Navigation = styled.nav``;
export const NavItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
  color:black;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  list-style:none;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;

  &.active,:visited {
    color: blue;
  }
`;
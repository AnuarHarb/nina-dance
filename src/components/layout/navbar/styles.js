import styled from 'styled-components';
import { colors } from '../constants';

const NavbarStyles = styled.header`
  align-items: center;
  background-image: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.5));
  color: white;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 40px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  .navbar-title {
    font-family: 'Tulpen One', cursive;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 4px;
    margin: 0;
  }

  .navbar-buttons {
    display: flex;
    list-style: none;
  }

  .menu-icon {
    display: none;
    width: 30px;
  }

  li {
    margin: 0 10px;
    font-size: 16px;
  }

  a {
    color: white;
    text-decoration: none;

    :hover {
      color: ${colors.highlight}
    }
  }

  @media (max-width: 967px) {
    .navbar-buttons {
      display: none;
    }

    .menu-icon {
      display: block;
    }
  }
`;

const SidenavStyles = styled.section`
  background-color: ${colors.purple};
  bottom: 0;
  box-sizing: border-box;
  color: ${colors.white};
  right: ${props => props.active ? 0 : '-300px'};
  top: 0;
  padding: 40px 20px;
  position: fixed;
  transition: right .4s ease-in;
  width: 300px;

  .close-icon {
    display: block;
    margin: 0 0 0 auto;
    width: 25px;
  }

  .title {
    font-family: 'Tulpen One', cursive;
    font-size: 40px;
  }
  .sidenav-buttons {
    list-style: none;
    li {
      border-bottom: 1px solid ${colors.white};
      padding: 25px 0;
    }
  }
`;

export {
  NavbarStyles,
  SidenavStyles
}

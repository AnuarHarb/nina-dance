import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../../assets/icons/menuIcon';
import CloseIcon from '../../../assets/icons/closeIcon';
import { NavbarStyles, SidenavStyles } from './styles';


const Navbar = (props) => {

  const [activeSidenav, setActiveSidenav] = useState(false);

  const toggleSidenav = () => {
    setActiveSidenav(!activeSidenav)
  }

  return (
    <NavbarStyles>
      <h1 className="navbar-title"><Link to="/">Nina Dance</Link></h1>
      <ul className="navbar-buttons">
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/bailando-con-nina'>Bailando con Nina</Link></li>
        <li><Link to='/creaciones'>Creaciones</Link></li>
      </ul>
      <MenuIcon
        className="menu-icon"
        color="white"
        handleClick={toggleSidenav}
      />
      <Sidenav
        active={activeSidenav}
        toggleSidenav={toggleSidenav}/>
    </NavbarStyles>
  )
}

const Sidenav = (props) => {
  const {
    active,
    toggleSidenav
  } = props;

  return (
    <SidenavStyles active={active}>
      <CloseIcon
        className="close-icon"
        color="white"
        handleClick={toggleSidenav}
        />
      <h2 className="title">Nina Dance</h2>
      <ul className="sidenav-buttons">
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/bailando-con-nina'>Bailando con Nina</Link></li>
        <li><Link to='/creaciones'>Creaciones</Link></li>
      </ul>
    </SidenavStyles>
  );
}

export default Navbar

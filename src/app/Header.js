import { Component } from 'react';
import './Header.css';
import { NavLink } from 'react';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <h1>React App</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sneks">Sneki-Sneks</NavLink>
        </nav>
      </header>
    );
  }

}

export default Header;
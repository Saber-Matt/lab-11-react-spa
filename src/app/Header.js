import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <header className="Header">


        <h1>These are the Sneks</h1>
        <nav>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/sneks" exact={true}>Theses be the Sneks</NavLink>
        </nav>

      </header>
    );
  }

}

export default Header;
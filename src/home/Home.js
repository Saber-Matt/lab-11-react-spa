import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h2>Home Page</h2>

        <Link to='/sneks'>See them Sneks</Link>
      </div>
    );
  }

}
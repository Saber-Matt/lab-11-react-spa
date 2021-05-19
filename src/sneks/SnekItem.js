import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SnekItem extends Component {

  render() {
    const snek = this.props.snek;

    return (
      <li className="SnekItem">
        <Link to={`/sneks/${snek.id}`}>
          <h2>{snek.name}</h2>

          <p>Type: {snek.type}</p>
        </Link>

      </li>
    );
  }

}

export default SnekItem;

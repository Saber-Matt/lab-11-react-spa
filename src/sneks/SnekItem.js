import React, { Component } from 'react';

class SnekItem extends Component {

  render() {
    const snek = this.props.snek;

    return (
      <li className="SnekItem">
        <h2>{snek.name}</h2>
        <h2>{snek.type}</h2>

      </li>
    );
  }

}

export default SnekItem;

import React, { Component } from 'react';
import SnekItem from './SnekItem.js';

export default class SnekList extends Component {
  render() {
    const { sneks } =
      this.props;
    return (
      <ul className="SnekList">
        {sneks.map(snek => (
          <SnekItem key={snek.id} snek={snek} />
        ))}
      </ul>
    );
  }
};
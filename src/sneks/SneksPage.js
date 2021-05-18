import React, { Component } from 'react';
import SnekList from './SnekList';
//import SnekItem from './SnekItem';

export default class SneksPage extends Component {
  state = {
    sneks: []
  }
  render() {

    const { sneks } = this.state;

    return (
      <div className="SneksPage">
        <h2>These are the Sneki-sneks</h2>

        <SnekList sneks={sneks} />
      </div>
    );
  }
}

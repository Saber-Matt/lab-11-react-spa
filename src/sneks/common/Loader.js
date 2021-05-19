import { Component } from 'react';

export default class Loader extends Component {

  render() {
    const { loading } = this.props;
    if (!loading) return null;

    return (
      <div className="Loader">
        <img src="/" alt="loader snek" />
      </div>
    );
  }

}
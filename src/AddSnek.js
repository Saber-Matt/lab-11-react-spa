import { Component } from 'react';
import SnekForm from './sneks/common/SnekForm.js';
import { addSnek } from './utils/sneks-api';

export default class AddSneks extends Component {
  state = {
    loading: false
  }

  handleAdd = async snekToAdd => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });

      const newSnek = await addSnek(snekToAdd);

      history.push(`/sneks/${newSnek.id}`);
    }
    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {

    return (
      <div className="SnekAddPage">
        <h2>Add A Snek</h2>
        <SnekForm onSubmit={this.handleAdd} />
      </div>
    );
  }

}
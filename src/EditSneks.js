import { Component } from 'react';
import SnekForm from './sneks/common/SnekForm.js';
import { getSnek, updateSnek } from './utils/sneks-api.js';


export default class EditSneks extends Component {
  state = {
    snek: null,
    loading: true
  }

  async componentDidMount() {
    //console.log('hello');
    const { match } = this.props;

    try {
      const snek = await getSnek(match.params.id);

      this.setState({ snek: snek });
      console.log('hello');
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleUpdate = async snek => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const updatedSnek = await updateSnek(snek);
      history.push(`/sneks/${updatedSnek.id}`);
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { snek } = this.state;
    console.log(snek);
    return (
      <div className="SnekEditPage">
        <h2>Edit Snek</h2>

        {snek && <SnekForm snek={snek} onSubmit={this.handleUpdate} />}
      </div>
    );
  }

}
import React, { Component } from 'react';
import SnekList from './SnekList';
//import SnekItem from './SnekItem';
import Loader from './common/Loader.js';
import { getSneks } from '../utils/sneks-api';

export default class SneksPage extends Component {
  state = {
    sneks: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const sneks = await getSneks();
      this.setState({ sneks: sneks });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {

    const { sneks, loading } = this.state;

    return (
      <div className="SneksPage">
        <Loader loading={loading} />
        <h2>These are the Sneki-sneks</h2>
        ;

        <SnekList sneks={sneks} />
      </div>
    );
  }
}
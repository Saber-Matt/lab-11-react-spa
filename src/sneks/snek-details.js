import { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router-dom';
import { getSnek, deleteSnek } from '../utils/sneks-api';
import './SnekDetailPage.css';

export default class SnekDetailPage extends Component {
  state = {
    snek: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const snek = await getSnek(match.params.id);
      this.setState({ snek: snek });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleDelete = async () => {
    const { snek } = this.state;
    const { history } = this.props;

    const confirmation = `Think twice before you delete ${snek.name}. Are you sure you'll survive`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteSnek(snek.id);
      history.push('/sneks');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { snek, loading } = this.state;

    if (!snek) return null;

    return (
      <div className="SnekDetailPage">
        <Loader loading={loading} />

        <h2>{snek.name}</h2>

        <img src={snek.url} alt={snek.name} />

        <p>This snek is a {snek.species}</p>
        <p>Bit user "{snek.userName}"</p>

        <Link to={`/sneks/${snek.id}/edit`}>
          Edit this Snek, if you dare
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete this Snek
        </button>
      </div>
    );
  }

}
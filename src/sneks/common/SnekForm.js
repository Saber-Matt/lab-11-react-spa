import { Component } from 'react';
import './SnekForm.css';

export default class SnekForm extends Component {
  state = {
    name: '',
    type: '',
    url: '',
    species: '',
    accessory: '',
    isDeadlyWithTheVenom: true
  }

  componentDidMount() {
    console.log('hello');
    const { snek } = this.props;
    if (!snek) { return; }

    this.setState(snek);
    console.log(this.state);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeType = ({ target }) => {
    this.setState({ type: target.value });
  }

  handleChangeUrl
    = ({ target }) => {
      this.setState({ url: target.value });
    }

  handleChangeSpecies = ({ target }) => {
    this.setState({ species: target.value });
  }

  handleChangeAccessory = ({ target }) => {
    this.setState({ accessory: target.value });
  }

  handleChangeIsDeadlyWithTheVenom = ({ target }) => {
    this.setState({ isDeadlyWithTheVenom: target.checked });
  }

  render() {
    const { name, type, url, species, accessory, isDeadlyWithTheVenom } = this.state;
    const { snek } = this.props;

    return (
      <form className="SnekForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Snek Name</span>
            <input name="name" required placeholder="Name your very own Snek of Wonder..."
              value={name} onChange={this.handleChangeName}
            />
          </label>
        </p>

        <p>
          <label>
            <span>What type of Snek is this?</span>
            <select name="type" required placeholder="Type (Boop Noodle, Danger Noodle, Nope Rope)"
              value={type} onChange={this.handleChangeType}
            >
              <option value="" disabled>Type (
                Be creative, this is your snek)</option>
              <option value='Cober'>Cober</option>
              <option>Patricia</option>
              <option>Giffee</option>
              <option>Hogball</option>
              <option>Blade Slither</option>
              <option>Top Hat Cober</option>
              <option>Sweater Noodle</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Accessories</span>
            <select name="accessory" required
              value={accessory}
              onChange={this.handleChangeAccessor}
            >
              <option>sweater</option>
              <option>top hat</option>
              <option>Bolt</option>
              <option>dual-wield short sword</option>
              <option>jeweled necklace</option>
              <option>'being adorable</option>
              <option>poke-esk card</option>
              <option>giraffe headband</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            <span>Which Snek is your favorite?</span>
            <input name="name" required pattern="\d{4}"
              name="Select from our list of Sneks"
              placeholder="Top Hat Cober"
              value={name} onChange={this.handleChangeName}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Has this one the potency of venom?</span>
            <span>
              <input name="isDeadlyWithTheVenom"
                type="checkbox"
                value={isDeadlyWithTheVenom} onChange={this.handleChangeIsSidekick}
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <button>{snek ? 'Update' : 'Add'} Snek</button>
        </p>

      </form>
    );
  }
}
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
    const { snek } = this.props;
    if (!snek) { return; }

    this.setState(snek);
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
        <form />}
);

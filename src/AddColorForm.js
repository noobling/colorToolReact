import { Component } from 'react';

class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      color: '#000',
      text: ''
    };
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addColor(this.state.text, this.state.color);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="color title..."
          required
          value={this.state.text}
          onChange={this.handleChange}
          name="text"
        />
        <input
          type="color"
          required
          value={this.state.color}
          name="color"
          onChange={this.handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default AddColorForm;

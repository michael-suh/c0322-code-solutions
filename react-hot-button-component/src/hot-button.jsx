import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount <= 3) {
      return (
        <button className="three" onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clickCount <= 6) {
      return (
        <button className="six" onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clickCount <= 9) {
      return (
        <button className="nine" onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clickCount <= 12) {
      return (
        <button className="twelve" onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clickCount <= 15) {
      return (
        <button className="fifteen" onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clickCount <= 18) {
      return (
        <button className="eighteen" onClick={this.handleClick}>
          Hot Button
        </button>
      );
    }
  }
}

import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClick: false };
  }

  handleClick() {
    this.setState({ isClick: !this.state.isClick });
  }

  render() {
    if (this.state.isClick === false) {
      return (
        <div>
          <label className="switch" onClick={this.handleClick}>
            <div type="checkbox"></div>
            <span className="slideroff round"></span>
          </label>
          <span className="text">OFF</span>
        </div>
      );
    } else {
      return (
        <div>
          <label className="switch" onClick={this.handleClick}>
            <div type="checkbox"></div>
            <span className="slideron round"></span>
          </label>
          <span className="text">ON</span>
        </div>
      );
    }
  }
}

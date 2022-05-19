import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      isClick: false
    };
    this.tick = this.tick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.setState({ timer: this.state.timer + 1 });
  }

  handleClick() {
    if (this.state.isClick === false) {
      this.setState({ isClick: !this.state.isClick });
      this.timerID = setInterval(() =>
        this.tick(), 1000
      );
    } else {
      this.setState({ isClick: !this.state.isClick });
      clearInterval(this.timerID);
    }
  }

  reset() {
    if (this.state.isClick === false) {
      this.setState({ timer: 0 });
    }
  }

  render() {
    if (this.state.isClick === false) {
      return (
        <div className='container'>
          <div className='watch center' onClick={this.reset}>
            <div className='text'>
              <h3>{this.state.timer}</h3>
            </div>
          </div>
          <div className='icon' onClick={this.handleClick}>
            <i className='fa-solid fa-play'></i>
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <div id="watch center">
          <div className='text'>
            <h3>{this.state.timer}</h3>
          </div>
        </div>
        <div className='icon' onClick={this.handleClick}>
          <i className='fa-solid fa-pause'></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;

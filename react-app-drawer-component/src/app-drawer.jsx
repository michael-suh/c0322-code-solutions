import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClick: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleSideBar = this.handleSideBar.bind(this);
  }

  handleClick() {
    this.setState({ isClick: !this.state.isClick });
  }

  handleSideBar() {
    if (this.state.isClick === false) {
      return 'menu-modal';
    } else if (this.state.isClick === true) {
      return 'menu-modal display';
    }
  }

  render() {
    if (this.state.isClick === false) {
      return (
        <div>
          <i className="icon fa-solid fa-bars" onClick={this.handleClick}></i>
          <div className='modal display'>
            <div className='menu-modal display'>
              <h3>Menu</h3>
              <ul>
                <li onClick={this.handleClick}>About Ferrari</li>
                <li onClick={this.handleClick}>Models</li>
                <li onClick={this.handleClick}>Racing</li>
                <li onClick={this.handleClick}>Shop</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='modal'>
            <div className='menu-modal'>
              <i className="icon fa-solid fa-bars display" onClick={this.handleClick}></i>
              <h3>Menu</h3>
              <ul>
                <li onClick={this.handleClick}>About Ferrari</li>
                <li onClick={this.handleClick}>Models</li>
                <li onClick={this.handleClick}>Racing</li>
                <li onClick={this.handleClick}>Shop</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AppDrawer;

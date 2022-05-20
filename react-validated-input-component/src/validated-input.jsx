import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === '') {
      this.setState({ message: 'A password is required.' });
    } else if (this.state.password.length < 8) {
      this.setState({ message: 'Your password is too short.' });
    } else {
      this.setState({ message: 'Nice and secure :)' });
    }
  }

  render() {
    let errIcon = '';
    let successIcon = '';
    if (this.state.value === '' || this.state.password.length < 8) {
      errIcon = 'fa-solid fa-xmark error-icon';
    } else {
      successIcon = 'fa-solid fa-check success-icon';
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='password'>
          Password:
        </label>
        <input id='password' onChange={this.handleChange} type="password"
          value={this.state.password}>
        </input>
        <i className={`${errIcon}`}></i>
        <i className={`${successIcon}`}></i>
        <p className='status-text'>{this.state.message}</p>
      </form>
    );
  }
}

export default ValidatedInput;

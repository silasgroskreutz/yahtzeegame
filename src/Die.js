import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  //Using constructor to allow a binding function
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  //Calling handleclick here as its own function rather than using an arrow function in the render
  //as a best practice; remember calling arrow function in render could cause performance issue in larger apps
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    return (
      <button
        className={'Die'}
        style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;

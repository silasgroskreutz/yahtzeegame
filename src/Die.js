import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  //Using staic props
  //...could be placed in constructor for it to work
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six']
  };

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
    const { numberWords, locked, val, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += 'Die-locked ';
    if (rolling) classes += 'Die-rolling';
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled}></i>
    );
  }
}

export default Die;

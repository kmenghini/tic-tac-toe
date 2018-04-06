import React, { Component } from 'react';
import styles from './square.css';

class Square extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.onSquareClick(this.props.rowIndex, this.props.colIndex);
  }

  render() {
    var squareText = this.props.text || undefined;
    return (
      <div className="square" onClick={this.handleClick.bind(this)}> {squareText} </div>
    )
  }
}

export default Square;